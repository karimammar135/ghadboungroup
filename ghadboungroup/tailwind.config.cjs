module.exports = {
    mode: 'jit',
    purge: [
        './templates/ghadboungroup/index.html',
        './src/**/*.{js,jsx}',
    ],
    theme: {
        screens: {
            nos: '580px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',  
            mid: '1160px',
            vl: '1850px',
        },
        extend: {
            colors: {
                primary: '#F8780F',
            },
        },
    },
    plugins: [],
};