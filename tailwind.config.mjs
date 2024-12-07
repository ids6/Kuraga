import starlightPlugin from '@astrojs/starlight-tailwind';
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // используется для ссылок и выделения текущего элемента;
        accent: colors.neutral,
        // используется для цветов фона и границ;
        gray: colors.gray,
      },
      fontFamily: {
        // используется для текста в интерфейсе и контента;
        sans: ['"Atkinson Hyperlegible"'],
        // используется для примеров кода.
        mono: ['"IBM Plex Mono"'],
      },
    },
  },
  plugins: [starlightPlugin()],
};