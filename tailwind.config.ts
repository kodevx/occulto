    // tailwind.config.ts
    import type { Config } from 'tailwindcss';

    const config: Config = {
      content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
      ],
      theme: {
        screens: {
          'xs': '480px',
          'sm':	'640px',
          'md':	'768px',
          'lg':	'1024px',
          'xl':	'1280px',
          '2xl':'1536px'
        },
        extend: {
          fontFamily: {
            alan: ['AlanSans','sans-serif'],
            replay: ['Replay', 'sans-serif']
          },
        },
      },
      plugins: [],
    };

    export default config;