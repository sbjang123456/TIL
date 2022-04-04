const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@model': path.resolve(__dirname, 'src/model/'),
            '@viewModel': path.resolve(__dirname, 'src/viewModel/'),
            '@view': path.resolve(__dirname, 'src/view/'),
        }
    },
    jest: {
        configure: {
            moduleNameMapper: {
                '^@(.*)$': '<rootDir>/src$1'
            }
        }
    }
};