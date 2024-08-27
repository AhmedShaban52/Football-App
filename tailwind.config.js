/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT ({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        firstColor:"#e41b23",
        secondColor:"#111111"
      },
   
      keyframes :{
        moveRight :{
          "0%" : {transform :"translateX(0)"},
          "50%" : {transform :"translateX(-120px)"},
          "100%" : {transform :"translateX(0)"},
        }
      },
      animation:{
        moveRight:"moveRight 20s ease-in-out infinite"
      }
    },
  },
  plugins: [],
})
