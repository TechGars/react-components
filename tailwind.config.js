/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      dropShadow:{
        underline: '0 3px 0px rgba(0,0,0,0.1)',
        standard: '0 4px 3px rgba(0,0,0,0.2)',
        // 'valid': '0 4px 3px rgba(0,255,0,0.75)',
        // 'underline-valid': '0 5px 0px rgba(0,0,255,0.75)',

      },
      width: {
        full: '100%',
        half: '50%',
        quarter: '25%'
      },
      height:{
        full: '100%',
        half: '50%',
        quarter: '25%'
      },
      colors:{
        'dark-grey':'#1B1F22'
      },
      animation:{
        arrow: 'arrow .5s ease both',
        'route-name': 'route-indicator .5 ease forwards',
        'image-out': 'img-out .4s ease both',
        'image-loading': 'img-loading 1s ease infinite',
        'image-loaded': 'img-loaded .5s ease forwards',
        'label-out': 'label-out .5s ease both',
        'label-back': 'label-back .5s ease both',
        'modal-open': 'modal-open .25s ease forwards',
        'modal-scale-open': 'modal-scale-open .25s ease forwards',
        'modal-close-up': 'modal-close-up .25s ease forwards',
        'modal-close-down': 'modal-close-down .25s ease forwards',
        'modal-close-right': 'modal-close-right .25s ease forwards',
        'modal-close-left': 'modal-close-left .25s ease forwards',
        'modal-scale-close': 'modal-scale-close .25s ease forwards',
        'intro-open': 'intro-open .3s ease forwards',
        'intro-close': 'intro-close .3s ease forwards',
        'add-indicator': 'add-indicator .25s ease forwards',
        'remove-indicator': 'remove-indicator .25s ease forwards',
        'hide-drawer': 'hide-drawer .35s ease forwards',
        
      },

      backgroundImage: {
        'main-gradient':'linear-gradient(to right, #ee0979, #ff6a00)',
        'colorado-blur': "url('/images/colorado-blur.jpg')",
        'enokaPic-blur': "url('/images/enokaPic-blur.jpg')",
        'nycDraw-blur': "url('/images/nycDraw-blur.jpg')",
        'nycBw-blur': "url('/images/nycBw-blur.jpg')",
        'sims2-blur': "url('/images/sims2-blur.jpg')",
        'portfolio-blur': "url('/images/portfolio-blur.jpg')",
        'hangman-blur': "url('/images/hangman-blur.jpg')",
        'firefly.screenshot-blur': "url('/images/firefly.screenshot-blur.jpg')",
        'Enoka_resume-blur': "url('/images/Enoka_resume-blur.jpg')",

      },

      keyframes:{
        
        arrow: {
          '0%':{ transform: 'translate(.2rem)', opacity:'100%' },
          '25%':{ transform: 'translate(.5rem)', opacity:'75%' },
          '50%':{ transform: 'translate(.75rem)', opacity:'25%' },
          '100%':{ transform: 'translate(1rem)', opacity:'0%' }
        },
        
        'img-out':{
          '0%': {transform:'translate(0, -5rem)'},
          '20%': {transform:'translate(0, -10rem)'},
          '40%': {transform:'translate(0, -20rem)'},
          '60%': {transform:'translate(0, -40rem)'},
          '80%': {transform:'translate(0, -80rem)'},
          '100%': {transform:'translate(0, -100rem)'},
        },
        'img-loading':{
          '0%': {opacity: '60%'},
          '100%': {opacity: '75%'},
        },
        'img-loaded':{
          '0%': {opacity: '0%'},
          '20%': {opacity: '20%'},
          '40%': {opacity: '40%'},
          '60%': {opacity: '60%'},
          '80%': {opacity: '80%'},
          '100%': {opacity: '85%'},
        },

        'label-out': {
          '0%':{ bottom: '0', left: '1rem' },
          '100%':{ bottom: '2rem', left: '0' },
        },
        
        'label-back': {
          '0%':{ bottom: '2rem', left: '0' },
          '100%':{ bottom: '0', left: '1rem' },
        },
        
        'modal-open':{
          '0%': { 
            display:'block',
            opacity: '0%', 
          },
          '50%': { 
            opacity: '50%', 
            
          },
          '100%':{ 
            opacity: '100%', 
            transform: 'translate(0, 0)'
          }
        },
        
        'modal-scale-open':{
          '0%': { 
            display:'block',
            opacity: '0%', 
            transform: 'scale(0)'
          },
          '100%':{ 
            opacity: '100%',
            transform: 'scale(1)'
          }
        },
        
        'modal-close-up':{
          '0%': { 
            opacity: '100%',
            transform: 'translate(0, -2rem)'
          },
          '50%':{ 
            opacity: '50%', 
            transform: 'translate(0, -4rem)'
           },
          '100%':{ 
            opacity: '0%', 
            transform: 'translate(0, -5rem)',
            display: 'none',
          }
        },
        'modal-close-down':{
          '0%': { 
            opacity: '100%',
            transform: 'translate(0, 2rem)'
          },
          '50%':{ 
            opacity: '50%', 
            transform: 'translate(0, 4rem)'
           },
          '100%':{ 
            opacity: '0%', 
            transform: 'translate(0, 5rem)',
            display: 'none',
          }
        },
        'modal-close-left':{
          '0%': { 
            opacity: '100%',
            transform: 'translate(2rem, 0)'
          },
          '50%':{ 
            opacity: '50%', 
            transform: 'translate(4rem, 0)'
           },
          '100%':{ 
            opacity: '0%', 
            transform: 'translate(5rem, 0)',
            display: 'none',
          }
        },
        'modal-close-right':{
          '0%': { 
            opacity: '100%',
            transform: 'translate(-2rem, 0)'
          },
          '50%':{ 
            opacity: '50%', 
            transform: 'translate(-4rem, 0)'
           },
          '100%':{ 
            opacity: '0%', 
            transform: 'translate(-5rem, 0)',
            display: 'none',
          }
        },
        'modal-scale-close':{
          '0%': { 
            transform: 'scale(1)',
            opacity: '100%'
          },
          '100%':{ 
            transform: 'scale(0)',
            opacity: '0%',
            display: 'none',
          }
        },

        'hide-drawer': {
          '0%': {
            opacity: '95%',
          },
          '25%': {
            opacity: '65%',
          },
          '50%': {
            opacity: '35%',
          },
          '100%': {
            opacity: '0%', visibility: 'hidden'
          },
        },
        
        'intro-open': {
          '0%': { height: '0vh' },
          '20%': { height: '1vh' },
          '40%': { height: '1vh' },
          '60%': { height: '2vh' },
          '80%': { height: '3vh' },
          '100%': { height: 'fit-content' }
        },
        
        'intro-close': {
          '0%': { height: 'fit-content' },
          '20%': { height: '3vh' },
          '40%': { height: '2vh' },
          '60%': { height: '1vh' },
          '80%': { height: '1vh' },
          '100%': { height: '0vh' },
        },
        'add-indicator': {
          '0%': { width: '0' },
          '25%': { width: '25%' },
          '50%': { width: '50%' },
          '75%': { width: '75%' },
          '100%':{ width: '100%' }
        },
        'remove-indicator': {
          '0%': { width: '100%' },
          '25%': { width: '75%' },
          '50%': { width: '50%' },
          '75%': { width: '25%' },
          '100%':{ width: '0%' }
        },
      }
    },
  },
  plugins: [],
}
