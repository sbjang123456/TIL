import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import html from '@rollup/plugin-html';
import serve from 'rollup-plugin-serve';
import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel'
import livereload from 'rollup-plugin-livereload'

export default {
    input: 'src/index.tsx',
    output: {
        file: 'build/index.js',
        format: 'es'
    },
    plugins: [
        replace({
            preventAssignment: true,
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        resolve(),
        babel({
            presets: ["@babel/preset-react"],
            // babelHelpers: 'runtime',
        }),
        commonjs(),
        typescript(),
        html(),
        process.env.NODE_ENV === 'development' && serve('build'),
        // process.env.NODE_ENV === 'development' && serve({
        //     open: true,
        //     verbose: true,
        //     contentBase: ["", "public"],
        //     host: "localhost",
        //     port: 10001,
        // }),
        livereload({ watch: "build" }),
    ]
};