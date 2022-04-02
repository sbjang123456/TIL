const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@controller': path.resolve(__dirname, 'src/components/controller/'),
            '@model': path.resolve(__dirname, 'src/components/model/'),
            '@viewModel': path.resolve(__dirname, 'src/components/viewModel/'),
            '@view': path.resolve(__dirname, 'src/components/view/'),
            '@provider': path.resolve(__dirname, 'src/components/provider/'),
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