import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import url from 'rollup-plugin-url';

export default {
    input: './docs/index.ts',
    output: {
        file: './docs/example.min.js',
        name: 'bundle',
        format: 'iife',
    },
    plugins: [
        typescript(),
        commonjs(),
        url({limit: 0}),
    ]
}
