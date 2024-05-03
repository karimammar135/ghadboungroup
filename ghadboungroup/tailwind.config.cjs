module.exports = {
    content: ['./src/**/*.{js,jsx}', './templates/ghadboungroup/index.html'],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            nos: '580px',
            mid: '1160px',
        },
        extend: {
            colors: {
                primary: '#F8780F',
            },
        },
    },
    plugins: [],
};