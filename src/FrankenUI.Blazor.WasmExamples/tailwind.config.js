import franken from "franken-ui/shadcn-ui/preset-quick";

/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [franken()],
    content: [
        "./**/*.{razor,html,cshtml}",
    ],
    safelist: [
      {
        pattern: /^uk-/,
      },
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }