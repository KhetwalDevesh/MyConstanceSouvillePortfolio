
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily:{
       helvetica:["helvetica","sans-serif"],
       ppEditorialNew:["ppEditorialNew","serif"],
       neueHaasDisplayRoman:["neueHaasDisplayRoman","sans-serif"]
      },
      gridTemplateColumns:{
        '15': 'repeat(15, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}
