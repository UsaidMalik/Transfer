import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      forms: (theme : any) => ({
        custom: {
          'input, textarea': {
            '&::placeholder': {
              color: theme('colors.gray.500'),
              opacity: '1',
            },
            '&:focus': {
              borderColor: theme('colors.blue.500'),
              boxShadow: theme('boxShadow.outline'),
            },
          },
          'input[type="submit"]': {
            backgroundColor: theme('colors.black'),
            color: theme('colors.white'),
            fontWeight: theme('fontWeight.bold'),
            '&:hover': {
              backgroundColor: theme('colors.green.500'),
            },
          },
        },
      }),
    },
  },
  plugins: [],
};
export default config;
