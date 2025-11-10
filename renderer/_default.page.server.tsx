import React from 'react';
import type { PageContextServer } from 'vite-plugin-ssr/types';
import type { PageContext, PageProps } from './types';
import { Layout } from './Layout';

export { render };

// Type for the page component (can be any valid React component)
type Page = (props: PageProps) => React.ReactElement;

// Type for the page context passed to render
type PageContextWithPage = PageContextServer & {
  Page: Page;
  pageProps?: PageProps;
  documentProps?: {
    title?: string;
    description?: string;
  };
  routeParams: Record<string, string>;
};

async function render(pageContext: PageContextWithPage) {
  const { Page, pageProps = {} } = pageContext;
  
  // Ensure routeParams is always an object
  const routeParams = pageContext.routeParams || {};
  
  // Create the page with route parameters and page props
  const page = <Page {...pageProps} routeParams={routeParams} />;
  
  // Create the context to pass to Layout
  const layoutContext: PageContext = {
    ...pageContext,
    routeParams,
    urlPathname: pageContext.urlPathname || '/',
  };
  
  return (
    <Layout pageContext={layoutContext}>
      {page}
    </Layout>
  );
}

export { passToClient };
const passToClient = ['pageProps', 'documentProps', 'routeParams'];
