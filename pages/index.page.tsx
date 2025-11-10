import React from 'react';
import { Helmet } from 'react-helmet-async';

// This is a page component that will be pre-rendered
export { Page };

function Page() {
  return (
    <>
      <Helmet>
        <title>Unfazed - Home</title>
        <meta name="description" content="Welcome to Unfazed - Your creative partner" />
        <meta property="og:title" content="Unfazed - Home" />
        <meta property="og:description" content="Welcome to Unfazed - Your creative partner" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      <main id="react-root">
        {/* Your existing App component will be rendered here */}
        <h1>Welcome to Unfazed</h1>
        <p>This page is pre-rendered for better SEO and performance.</p>
      </main>
    </>
  );
}

// This function can be used to fetch data at build time
export async function onBeforeRender() {
  // You can fetch data here that will be available as pageProps
  return {
    pageContext: {
      pageProps: {
        // Add any data you want to pass to the page
        appName: 'Unfazed',
        // ... other data
      },
      documentProps: {
        // This title & description are used for the document's <title> and <meta> tags
        title: 'Unfazed - Home',
        description: 'Welcome to Unfazed - Your creative partner'
      }
    }
  };
}
