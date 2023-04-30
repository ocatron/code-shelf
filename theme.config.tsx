import { DocsThemeConfig } from 'nextra-theme-docs/.';
import Logo from './components/Logo';

const config: DocsThemeConfig = {
  logo: <Logo className="text-xl" />,
  project: {
    link: 'https://github.com/shuding/nextra',
  },
  search: {
    loading: () => 'Searching...',
  },
  sidebar: {
    titleComponent: ({ title, type }) => {
      console.log(type);
      if (type === 'separator') {
        return (
          <div style={{ background: 'cyan', textAlign: 'center' }}>{title}</div>
        );
      }
      return <>{title}</>;
    },
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
