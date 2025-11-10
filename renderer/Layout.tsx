import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import type { PageContext } from './types';

type LayoutProps = {
  children: ReactNode;
  pageContext: PageContext;
};

export function Layout({ children, pageContext }: LayoutProps) {
  const { documentProps } = pageContext;
  const title = documentProps?.title || 'Unfazed AI Automation Agency';
  const description = documentProps?.description || 'Save 90% Time, Earn 24/7 with our AI automation solutions';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
      
      {children}
    </>
  );
}
