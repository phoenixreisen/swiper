import typescript from '@rollup/plugin-typescript';
import scss from 'rollup-plugin-scss';

export default {
    input: './src/swiper.m.tsx',

    output: {
        format: 'es',
        file: './dist/swiper.m.js',
    },
    plugins: [
        scss(),
        typescript({
            declarationDir: ".",
            tsconfig: "./tsconfig.json"
        }),
    ],
    external: [
        'swiper',
        'mithril',
    ]
}
