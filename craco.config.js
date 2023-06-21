const path = require(`path`);

module.exports = {
    webpack: {
        alias: {
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@shared': path.resolve(__dirname, 'src/shared'),
            '@core': path.resolve(__dirname, 'src/core'),
        },
    },
};