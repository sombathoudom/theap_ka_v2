/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'frame': `url('/lframe.png'), url('/rframe.png')`
      },
      aspectRatio: {
        '9/16': '9 / 16',
      },
      colors: {
        sand: '#D3C8B3',
        nude1: '#d6c2b2',
        nude2: '#aa9788',
        nude3: '#806e60',
        nude4: '#58483b',
        nude5: '#332519',
        lightearth: '#ceaa9a',
        mediumearth: '#B5927F'
      },
      keyframes: {
        zoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        turn3D: {
          '0%': { transform: 'perspective(400px) rotateY(0deg)' },
          '50%': { transform: 'perspective(400px) rotateY(-20deg)' },
          '100%': { transform: 'perspective(400px) rotateY(20deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        zoom: 'zoom 2s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        float: 'float 2s ease-in-out infinite',
        turn3D: 'turn3D 4s ease-in-out infinite alternate',
        'zoom-in-out': 'zoomInOut 5s ease-in-out infinite',
        'fade-in': 'fadeIn 3s ease-in-out',
      },
    },
  },
  plugins: [],
}

