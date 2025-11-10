import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Index from "./pages/Index";
import About from "./pages/About";
import Policies from "./pages/Policies";
import Services from "./pages/Services";
import Chatbot from "./components/Chatbot";

const queryClient = new QueryClient();

const App = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Set isMounted to true after component mounts to avoid SSR issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/services" element={<Services />} />
          </Routes>
          {isMounted && <Chatbot />}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
