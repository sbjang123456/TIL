import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import html from '@rollup/plugin-html';
import serve from 'rollup-plugin-serve';
import replace from '@rollup/plugin-replace';

export default {
    input: 'src/index.tsx',
    output: {
        file: 'build/index.js',
        format: 'es'
    },
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        resolve(),
        commonjs(),
        typescript(),
        html(),
        process.env.NODE_ENV === 'development' && serve('build')
    ]
};