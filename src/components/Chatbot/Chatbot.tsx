import React, { useState, useEffect, useRef } from 'react';
import styles from './Chatbot.module.css';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: number;
  isHtml?: boolean;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Clear chat history from localStorage on component mount
  useEffect(() => {
    localStorage.removeItem('unfazedChatHistory');
    setMessages([]);
  }, []);

  // Save messages to localStorage whenever they change (only while chat is open)
  useEffect(() => {
    if (messages.length > 0 && isOpen) {
      localStorage.setItem('unfazedChatHistory', JSON.stringify(messages));
    }
  }, [messages, isOpen]);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300); // Small delay for animation
    }
  }, [isOpen]);

  const formatWebhookResponse = (text: string): string => {
    if (!text) return '';
    
    // Remove markdown formatting but preserve structure
    return text
      // Remove markdown symbols
      .replace(/\*\*|__/g, '')
      .replace(/#{1,6}\s*/g, '')
      .replace(/`{3}.*?`{3}/gs, '') // Remove code blocks
      .replace(/`(.*?)`/g, '$1') // Remove inline code
      .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove markdown links
      .replace(/^\s*[-*+]\s+/gm, '• ') // Convert markdown list items to bullets
      .replace(/^\s*\d+\.\s+/gm, (match) => match.trim() + ' '); // Preserve numbered lists
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: inputValue.trim(),
      sender: 'user',
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('https://n8n.unfazed-ai.online/webhook/a1de2fe4-04be-4ed9-9c0f-b16dcbd56171', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage.text }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      const responseText = data.output || data.response || JSON.stringify(data);
      const formattedText = formatWebhookResponse(responseText);

      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        text: formattedText || 'I received your message but the response was empty.',
        sender: 'bot',
        timestamp: Date.now(),
        isHtml: true
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        text: 'Hmm, something went wrong. Please try again.',
        sender: 'bot',
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSendMessage(e);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
      // Close the chat when navigating to contact form
      setIsOpen(false);
    }
  };

  return (
    <div className={`${styles.chatbotContainer} ${isOpen ? styles.open : ''}`}>
      {isOpen ? (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <h3 className={styles.chatTitle}>Team Unfazed</h3>
            <div className={styles.headerButtons}>
              <button 
                onClick={scrollToContactForm} 
                className={styles.bookCallButton}
                aria-label="Book a call"
              >
                Book a Call
              </button>
              <button onClick={toggleChat} className={styles.closeButton} aria-label="Close chat">
                ×
              </button>
            </div>
          </div>
          <div className={styles.messagesContainer}>
            {messages.map((message) => {
              const messageClass = `${styles.message} ${message.sender === 'user' ? styles.userMessage : styles.botMessage} ${message.isHtml ? styles.htmlMessage : ''}`;
              
              if (message.isHtml) {
                return (
                  <div
                    key={message.id}
                    className={messageClass}
                    dangerouslySetInnerHTML={{ 
                      __html: message.text
                        .replace(/\n/g, '<br>') // Convert newlines to <br>
                        .replace(/•/g, '•') // Ensure bullet points are preserved
                    }}
                  />
                );
              }
              
              return (
                <div key={message.id} className={messageClass}>
                  {message.text.split('\n').map((line, i, arr) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < arr.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              );
            })}
            {isLoading && (
              <div className={`${styles.message} ${styles.botMessage} ${styles.typingIndicator}`}>
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSendMessage} className={styles.inputContainer}>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about automations, services"
              className={styles.messageInput}
              disabled={isLoading}
            />
            <button 
              type="submit" 
              className={styles.sendButton}
              disabled={!inputValue.trim() || isLoading}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
              </svg>
            </button>
          </form>
        </div>
      ) : (
        <div className={styles.chatButtonContainer}>
          <button onClick={toggleChat} className={styles.chatButton} aria-label="Chat with Team">
            <span className={styles.chatIcon}>⚡</span>
            <span className={styles.chatLabel}>Chat with Team</span>
          </button>
        </div>
      )}
    </div>
  );
};

  // Helper function to format the response text with proper line breaks and bullet points
  const formatResponseText = (text: string): string => {
    if (!text) return '';
    
    // Clean up the text
    let formattedText = text
      // Remove any JSON or markdown artifacts
      .replace(/^\{\s*["']?output["']?\s*:\s*["']?([^"']*)["']?\s*\}$/, '$1')
      .replace(/^["']|["']$/g, '')
      .replace(/\\"/g, '"')
      .replace(/\\n/g, '\n')
      .replace(/\\/g, '')
      // Remove HTML tags
      .replace(/<[^>]*>?/gm, '')
      // Remove markdown formatting
      .replace(/[#*_~`]/g, '')
      // Clean up extra whitespace
      .replace(/\s+/g, ' ')
      .trim();

    // Handle special case for the services list
    if (formattedText.includes('Here are some of our core offerings:')) {
      // Format as a clean list without bullet points
      formattedText = formattedText
        .replace(/•/g, '') // Remove existing bullet points
        .replace(/\s+/g, ' ') // Normalize spaces
        .replace(/([a-z])([A-Z])/g, '$1\n$2') // Add line breaks before capital letters after lowercase
        .replace(/:\s*/g, ':\n') // Add line breaks after colons
        .replace(/\s*,\s*/g, ', ') // Clean up commas
        .replace(/\n\s*\n/g, '\n') // Remove double line breaks
        .trim();
    } else {
      // Standard formatting for other messages
      formattedText = formattedText
        // Add double line breaks after sentences
        .replace(/([.!?])\s+/g, '$1\n\n')
        // Convert various bullet point formats to consistent bullets
        .replace(/\b(\d+\.|\-|\*|•|→)\s*/g, '• ')
        // Ensure single space after bullet points
        .replace(/•\s*/g, '• ')
        // Clean up multiple newlines
        .replace(/\n{3,}/g, '\n\n')
        .trim();
    }

    // Ensure proper capitalization and punctuation
    if (formattedText.length > 0) {
      formattedText = formattedText.charAt(0).toUpperCase() + formattedText.slice(1);
    }
    if (formattedText.length > 0 && !/[.!?]$/.test(formattedText)) {
      formattedText += '.';
    }

    return formattedText;
  };

export default Chatbot;
