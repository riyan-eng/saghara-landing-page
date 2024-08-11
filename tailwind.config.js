/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.{html,js}"
  ],
  theme: {
    extend: {
      minHeight: {
        '180': '47rem',
      },
      padding: {
        '20rem': '20rem',
      },
      width: {
        '128': '40rem',
      }
    },
    borderRadius: {
      'large': '45px',
      'lg': '20px',
    }
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["emerald"],
  },
}

