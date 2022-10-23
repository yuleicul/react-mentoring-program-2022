- npm init
- git init
- React code
- prettier

  `--exactly`

- dev server: vercel/serve

  How does dev server work?

  `--bundleConfigAsCjs`? Ketcher doesn't have it

- HMR
  equal to `liveload`?

  How does it work?

- Babel

  babelHelpers?

- import package from `node_module`

  What does `@rollup/plugin-node-resolve`?

  When to treat a package as an `external` package instead of resolving it?

- bug: cannot `import ReactDOM from 'react-dom/client'`

  https://rollupjs.org/guide/en/#error-name-is-not-exported-by-module

- `@rollup/plugin-replace`

  We can see React use `process.env.NODE_ENV` in its code, but browser doesn't have `process`

  But why use `JSON.Stringify` ??

  > Note: Values must be either primitives (e.g. string, number) or function that returns a string. For complex values, use JSON.stringify. To replace a target with a value that will be evaluated as a string, set the value to a quoted string (e.g. "test") or use JSON.stringify to preprocess the target string safely.

- When making a modern JavaScript project, you might ask yourself what is the right way to convert files from TypeScript to JavaScript?

  https://www.typescriptlang.org/docs/handbook/babel-with-typescript.html

  In a Rollup set project, `@babel/preset-typescript` is to generate your JS files, `@rollup/plugin-typescript` is to do type checking and .d.ts file generation.
