import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';

// Base page props that all pages will receive
export interface BasePageProps {
  // Common props that all pages will receive
  routeParams?: Record<string, string>;
  urlPathname?: string;
  // Add any other common props here
}

// Extend this interface in your page components
export interface PageProps extends BasePageProps {
  // Add your page-specific props here
  appName?: string;
  [key: string]: any; // Allow any additional props
}

export interface DocumentProps {
  title?: string;
  description?: string;
  // Add any other document-related props here
}

// The page component type
export type Page = (props: PageProps) => React.ReactElement;

// The page context type
export interface PageContext extends Omit<PageContextBuiltIn<Page>, 'Page' | 'exports' | 'exportsAll' | 'config' | 'configEntries' | 'configAll' | 'configAllMap' | 'configAllMapSorted' | 'configAllMapSortedByConfigName'> {
  // The page component to render
  Page: Page;
  // The page props
  pageProps?: PageProps;
  // Document metadata
  documentProps?: DocumentProps;
  // Route parameters
  routeParams: Record<string, string>;
  // Current URL pathname
  urlPathname: string;
  // Make is404 non-optional to match PageContextBuiltIn
  is404: boolean | null;
  // Add any other custom properties your page context might have
}
