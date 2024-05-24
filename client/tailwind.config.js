module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': '1440px',
        'sm': '375px',
      },
      colors: {
        'azure-deepblue': '#009cde', // Adjust this color code based on Ticketmaster's branding
      'azure-lightblue':'#069AF3',
      'azure-white':'#E5E8EC',
      'azure-black':'#051441',
      },
    },
  },
  plugins: [],
}

