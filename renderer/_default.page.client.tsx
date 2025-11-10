import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import type { PageContextClient } from 'vite-plugin-ssr/types';
import type { Page, PageContext, PageProps } from './types';
import { Layout } from './Layout';

export { render };

// Type for the page context passed to render
type PageContextWithPage = PageContextClient & {
  Page: Page;
  pageProps?: PageProps;
  isHydration?: boolean;
  isBackwardNavigation?: boolean;
  documentProps?: {
    title?: string;
    description?: string;
  };
  routeParams: Record<string, string>;
  urlPathname: string;
};

let root: ReturnType<typeof hydrateRoot>;

async function render(pageContext: PageContextWithPage) {
  const { Page, pageProps = {} } = pageContext;
  
  // Ensure routeParams is always an object
  const routeParams = pageContext.routeParams || {};
  
  // Create the page with route parameters and page props
  const page = <Page {...pageProps} routeParams={routeParams} urlPathname={pageContext.urlPathname} />;
  
  const container = document.getElementById('react-root');
  if (!container) throw new Error('Root element not found');
  
  // Create the context to pass to Layout
  const layoutContext: PageContext = {
    ...pageContext,
    routeParams,
    urlPathname: pageContext.urlPathname || '/',
  };
  
  const app = (
    <React.StrictMode>
      <Layout pageContext={layoutContext}>
        {page}
      </Layout>
    </React.StrictMode>
  );
  
  if (pageContext.isHydration) {
    // First render (SSR + hydration)
    root = hydrateRoot(container, app);
  } else {
    // Client-side navigation
    if (!root) {
      root = hydrateRoot(container, app);
    } else {
      root.render(app);
    }
  }
}

// Enable client-side routing
export const clientRouting = true;

// Lifecycle hooks
export { onHydrationEnd, onPageTransitionStart, onPageTransitionEnd };

function onHydrationEnd() {
  console.log('Hydration finished; page is now interactive.');
}

function onPageTransitionStart() {
  console.log('Page transition started');
  document.body.classList.add('page-transition');
}

function onPageTransitionEnd() {
  console.log('Page transition ended');
  document.body.classList.remove('page-transition');
}
