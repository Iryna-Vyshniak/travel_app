/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './section/**/*.{html,js,jsx,tsx}',
    './styles/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#b2ffb2',
          60: '#006600',
          70: '#B3BB8C',
          80: '#004c00',
          90: '#01170D',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FFDA16',
        },
      },
      backgroundImage: {
        'hero': "url('https://ik.imagekit.io/irinavn2011/camp.jpg?updatedAt=1697807150648')",
        "activity": "url('/activity.png')",
        'circle': "url('/campHero.jpg')",
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        'pattern': "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
        'forest': "url('/forest.svg')",
      },
      backdropBlur: {
        mds: '18px'
      },
      content: {
        ponteD: "url('/ponteD.png')",
        ponteT: "url('/ponteT.png')",
        ponteM: "url('/ponteM.png')",
      },
      screens: {
        'mob': '360px',
        'xs': '480px',
        '2xl': '1440px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};