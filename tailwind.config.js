/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
             sm: "px",
             md: "500px",
             lg: "976px",
             xl: "1440px"

    },
    extend: {
      colors: {
        // customColor1: 'rgb(47, 46, 77)',
        customColor2: 'rgb(0, 115, 216)',
        cust2hover: 'rgb(90,190,255)',
        customeColor3: 'rgb(7,235,249)',
        customecolor4: 'rgb(173,238,247)',
        coustomecolor5: 'rgb(0,122,255)',
        react: 'rgb(101,99,255)',
        angu: 'rgb(221,0,49)',
        commun: 'rgb(0,90,118)',
        degit: 'rgb(107,208,240)',
        home: 'rgb(161,219,237)',
        verti: 'rgb(0,116,217)',
        form: 'rgb(154,238,243)',
        oops: 'rgb(226,252,246)',
        cotact: 'rgb(0,90,118)'
        // form: 'hex(#9AEEF3)'
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}

