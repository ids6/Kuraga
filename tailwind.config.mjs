import starlightPlugin from '@astrojs/starlight-tailwind';
import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme'

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
        // sans: ['"Atkinson Hyperlegible"'],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        // используется для примеров кода.
        mono: ['"IBM Plex Mono"'],
      },
    },
  },
  plugins: [starlightPlugin()],
};