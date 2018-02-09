import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import handlebars from 'rollup-plugin-handlebars-plus';
import uglify from 'rollup-plugin-uglify';
import pkg from './package.json';

export default [
  {
    input: 'src/main.js',
    output: {
      name: 'AngularTransformicons',
      file: pkg.browser,
      format: 'umd',
    },
    plugins: [
      resolve(),
      commonjs(),
      postcss({
        plugins: [autoprefixer],
      }),
      handlebars({
        exclude: '.',
      }),
      babel(),
      uglify(),
    ],
  },
  {
    input: 'src/main.js',
    external: ['angular'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [
      postcss({
        plugins: [autoprefixer],
      }),
      handlebars({
        exclude: '.',
      }),
    ],
  },
];
