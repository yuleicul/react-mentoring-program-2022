import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
import { babel } from '@rollup/plugin-babel'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import htmlTemplate from 'rollup-plugin-generate-html-template'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.tsx',
  output: {
    file: 'dist/bundle.js',
    format: 'es', // can be 'cjs', 'iife'
  },
  plugins: [
    process.env.NODE_ENV === 'development' &&
      serve({
        contentBase: 'dist',
        port: 3000,
      }),
    process.env.NODE_ENV === 'development' && livereload(),

    // Locate and bundle third-party dependencies in node_modules
    // https://github.com/rollup/plugins/tree/master/packages/node-resolve
    nodeResolve(),

    // `@rollup/plugin-commonjs` must be placed before `@rollup/plugin-babel` in the plugins array for the two to work together properly.
    // https://github.com/rollup/plugins/tree/master/packages/babel

    // Convert CommonJS modules to ES6
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    commonjs(),

    // Using Babel’s preset-typescript to generate JS files,
    // and then using TypeScript to do type checking and .d.ts file generation.
    // https://www.typescriptlang.org/docs/handbook/babel-with-typescript.html
    babel({
      babelHelpers: 'bundled', // ?
      exclude: 'node_modules/**',
    }),
    typescript(),

    // ? Some packages use `process` in their code which should be replaced by string when running in the browser.
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      preventAssignment: true,
    }),

    htmlTemplate({
      template: 'index.html',
      target: 'index.html',
    }),
  ],
}
