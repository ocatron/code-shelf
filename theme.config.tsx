import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import Logo from './components/Logo';
import { useRouter } from 'next/router';

const config: DocsThemeConfig = {
  logo: <Logo className="text-xl" />,
  project: {
    link: 'https://github.com/tracethamara/code-shelf',
  },
  docsRepositoryBase: 'https://github.com/tracethamara/code-shelf',
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Code Shelf',
      };
    }
  },
  head: function useHead() {
    const { title } = useConfig();

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="A collection of reusable code snippets and
          notes for Development, Operations, and Configuration."
        />
        <meta
          name="og:description"
          content="A collection of reusable code snippets and
          notes for Development, Operations, and Configuration."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="og:title" content={title ? title : 'Code Shelf'} />
        <meta name="apple-mobile-web-app-title" content="Code Shelf" />
      </>
    );
  },
  search: {
    loading: () => 'Searching...',
  },
  editLink: {
    component: () => null,
  },
  feedback: {
    content: 'Got feedback? Let me know →',
  },
  footer: {
    text: (
      <a href="https://github.com/tracethamara" target="_blank">
        @tracethamara
      </a>
    ),
  },
};

export default config;
