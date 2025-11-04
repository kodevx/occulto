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
          keyframes: {
            upperCaseLettersV1: {
              '0%': { content: '"A"' },
              '10%': { content: '"G"' },
              '20%': { content: '"T"' },
              '30%': { content: '"D"' },
              '40%': { content: '"H"' },
              '50%': { content: '"M"' },
              '60%': { content: '"S"' },
              '70%': { content: '"U"' },
              '80%': { content: '"X"' },
              '90%': { content: '"O"' },
              '100%': { content: '"Z"' },
            },
            upperCaseLettersV2: {
              '0%': { content: '"B"' },
              '10%': { content: '"N"' },
              '20%': { content: '"Y"' },
              '30%': { content: '"I"' },
              '40%': { content: '"H"' },
              '50%': { content: '"R"' },
              '60%': { content: '"K"' },
              '70%': { content: '"Y"' },
              '80%': { content: '"E"' },
              '90%': { content: '"D"' },
              '100%': { content: '"W"' },
            },
            lowerCaseLettersV1: {
              '0%': { content: '"f"' },
              '10%': { content: '"d"' },
              '20%': { content: '"k"' },
              '30%': { content: '"y"' },
              '40%': { content: '"e"' },
              '50%': { content: '"x"' },
              '60%': { content: '"n"' },
              '70%': { content: '"y"' },
              '80%': { content: '"a"' },
              '90%': { content: '"z"' },
              '100%': { content: '"c"' },
            },
            lowerCaseLettersV2: {
              '0%': { content: '"b"' },
              '10%': { content: '"m"' },
              '20%': { content: '"n"' },
              '30%': { content: '"o"' },
              '40%': { content: '"q"' },
              '50%': { content: '"x"' },
              '60%': { content: '"p"' },
              '70%': { content: '"s"' },
              '80%': { content: '"r"' },
              '90%': { content: '"v"' },
              '100%': { content: '"t"' },
            },
            numbers: {
              '0%': { content: '"10"' },
              '10%': { content: '"8"' },
              '20%': { content: '"1"' },
              '30%': { content: '"9"' },
              '40%': { content: '"5"' },
              '50%': { content: '"3"' },
              '60%': { content: '"7"' },
              '70%': { content: '"2"' },
              '80%': { content: '"0"' },
              '90%': { content: '"4"' },
              '100%': { content: '"6"' },
            },
            symbols: {
              '0%': { content: "'@'" },
              '10%': { content: "'^'" },
              '20%': { content: "'#'" },
              '30%': { content: "'+'" },
              '40%': { content: "'-'" },
              '50%': { content: "'!'" },
              '60%': { content: "'%'" },
              '70%': { content: "'*'" },
              '80%': { content: "'?'" },
              '90%': { content: "'&'" },
              '100%': { content: "'$'" },
            }
          },
          animation: {
            'uppercasev1-letters-change': 'upperCaseLettersV1 4s ease-in-out infinite',
            'uppercasev2-letters-change': 'upperCaseLettersV2 5s ease-in-out infinite',
            'lowercasev1-letters-change': 'lowerCaseLetterV1 2s ease-in-out infinite',
            'lowercasev2-letters-change': 'lowerCaseLettersV2 5s ease-in-out infinite',
            'numbers-change': 'numbers 2s ease-in-out infinite',
            'symbols-change': 'symbols 6s ease-in-out infinite',
          },
        }
      },
      plugins: [],
    };

    export default config;