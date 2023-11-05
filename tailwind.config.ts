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
          5: '#FCFAF1',
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#61677c',
          90: '#141414',
        },
        orange: {
          30: '#ffa54f',
          40: '#FBCD93',
          50: '#a0522d',
          60: '#cd8500',
          80: '#8b4513',
          90: '#2F1711'
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FFDA16',
        },
      },
      backgroundImage: {
        'about': "url('https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')",
        'texture': "url('/texture.jpg')",
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
      backgroundSize: {
        "size-200": "200% 200%",
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
      minHeight: {
        screenHeightWithoutHeader: 'calc(100vh - 88px)'
      },
      height: {
        screenHeightWithoutHeader: 'calc(100vh - 88px)'
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};