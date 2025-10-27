import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Unfazed AI - Transform your business with AI-powered automation and workflow solutions. Get started with our expert services today." />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://unfazed-ai.online/" />
        <meta property="og:title" content="Unfazed AI - AI-Powered Business Automation" />
        <meta property="og:description" content="Transform your business with AI-powered automation and workflow solutions. Get started with our expert services today." />
        <meta property="og:image" content="https://unfazed-ai.online/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://unfazed-ai.online/" />
        <meta property="twitter:title" content="Unfazed AI - AI-Powered Business Automation" />
        <meta property="twitter:description" content="Transform your business with AI-powered automation and workflow solutions. Get started with our expert services today." />
        <meta property="twitter:image" content="https://unfazed-ai.online/og-image.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
