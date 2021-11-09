import resolve from "@rollup/plugin-node-resolve";
import typescript from 'rollup-plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import scss from 'rollup-plugin-scss';

export default {
    input: './docs/index.ts',

    output: {
        format: 'iife',
        name: 'bundle',
        file: './docs/example.min.js',
    },
    plugins: [
        scss(),
        resolve(),
        commonjs(),
        typescript({
            declarationDir: ".",
            tsconfig: "./tsconfig.json"
        }),
    ]
}
