# React Global Mentoring Program

## Completion

|                                     |                             |         |     |
| ----------------------------------- | --------------------------- | ------- | --- |
| Module #1: Help module              | Oct 11, 2022                | 1 day   | ✅  |
| Module #2: Core concepts            | Oct 12, 2022 - Oct 18, 2022 | 7 days  | ✅  |
| Module #3: ~~Webpack~~ Rollup       | Oct 19, 2022 - Oct 25, 2022 | 7 days  | ✅  |
| Module #4: Components (Part 1)      | Oct 26, 2022 - Nov 01, 2022 | 7 days  | ✅  |
| Module #5: Components (Part 2)      | Nov 02, 2022 - Nov 08, 2022 | 7 days  | ✅  |
| Module #6: Hooks                    | Nov 09, 2022 - Nov 15, 2022 | 7 days  | ✅  |
| Module #7: Redux                    | Nov 16, 2022 - Nov 29, 2022 | 14 days |     |
| Module #8: Forms                    | Nov 30, 2022 - Dec 06, 2022 | 7 days  |     |
| Module #9: Routing                  | Dec 07, 2022 - Dec 13, 2022 | 7 days  |     |
| Module #10: Testing                 | Dec 14, 2022 - Dec 20, 2022 | 7 days  |     |
| Module #11: SSR                     | Dec 21, 2022 - Dec 27, 2022 | 7 days  |     |
| Module #12: Patterns, tips & tricks | Dec 28, 2022 - Jan 03, 2023 | 7 days  |     |
| Module #13: Clean Code              | Jan 04, 2023 - Jan 06, 2023 | 3 days  |     |
| Module #14: CloudX: Foundations     | Jan 07, 2023 - Jan 09, 2023 | 3 days  |     |

## Module #2: Core concepts

https://stackblitz.com/edit/react-84z59b?file=src/App.js

## Module #3: ~~Webpack~~ Rollup

### Getting started

```sh
# install
yarn

# develop
yarn dev

# build
yarn build
```

#### What's going on after running commands above?

![What's going on after running commands above?](docs/what-is-going-on-after-running-commands.png)

You can click [here](https://excalidraw.com/#json=DeOoPxllmrObvAj66gmMV,26oCT1_DPb-38MqzSPJ3Kg) to edit the graph.

### Q&A

- What can we do to avoid `--bundleConfigAsCjs` in the rollup command? (in `package.json`)

  By add `"type": "module"` to `package.json`, but why?

- How does HMR work? What's the difference between HMR and [rollup-plugin-livereload](https://github.com/thgh/rollup-plugin-livereload)?

  > Keywords: websocket, JS runtime, dependency tree

- What is `babelHelpers`? (in `rollup.config.js`)

  How babel helpers are inserted into the code. https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers

- How does [@rollup/plugin-node-resolve](https://github.com/rollup/plugins/tree/master/packages/node-resolve) work?

  > Keywords: node dependency resolve strategy

- In what situation we need to treat a package as an `external` package, and how to?

- What does [@rollup/plugin-replace](https://github.com/rollup/plugins/tree/master/packages/replace) do? and why we need to use `JSON.Stringify`?

  We can see React use `process.env.NODE_ENV` in its code, but browser doesn't have `process`

  > [Note](https://github.com/rollup/plugins/tree/master/packages/replace#usage): Values must be either primitives (e.g. string, number) or function that returns a string. For complex values, use JSON.stringify. To replace a target with a value that will be evaluated as a string, set the value to a quoted string (e.g. "test") or use JSON.stringify to preprocess the target string safely.

  React has two versions - development and production. React will throw warnings to the console when developing, whereas, hide them in production environment. Maybe this is why we need to use `@rollup/plugin-replace` even in the browser env.

- What is the right way to convert files from TypeScript to JavaScript?

  https://www.typescriptlang.org/docs/handbook/babel-with-typescript.html

  In a Rollup bundled project, `@babel/preset-typescript` is to generate your JS files, `@rollup/plugin-typescript` is to do type checking and .d.ts file generation.

  `@babel/preset-typescript` may can resolve conflicts between JSX and Typescript.

- How does dev server, such as [rollup-plugin-serve](https://github.com/thgh/rollup-plugin-serve), work?

  > Keywords: http server

## Module #4: Components (Part 1)

https://github.com/yuleicul/rgm-2022q4-demo/pull/1

### Changelog

Add devdep rollup (OMG)
Update README
Hover on card to show the menu
Add item context menu
Add global styles (temp ways)
Update styles
Rename home page
Add Homepage UI
Solve problem with importing svg
Delete unused file
(WIP) Add global styles by `createGlobalStyle`
Add dev dep @types/styled-components
Fix missing shims for Node.js built-ins
Replace emotion with styled-components
Remove `--bundleConfigAsCjs`
Add ErrorBoundary
Add emotion for styling
Support the new jsx transform

## Module #5: Components (Part 2)

https://github.com/yuleicul/rgm-2022q4-demo/pull/3

### Changelog

Update README
Fix ts warnings
Turn on ts strict compiler option
Pass data to edit modal
Close movie context menu on blur
Add delete and success modals
Add Google fonts
Finish AddMovieModal component
Fix style overriding
Add common Input component

## Module #6: Hooks

Fix changelog
Update changelog
Add new custom hook useFetch
Add movie detail banner
Add eslint plugin react hooks
Add changelog to README

## Fixed issues

- Cannot `import ReactDOM from 'react-dom/client'`

  https://rollupjs.org/guide/en/#error-name-is-not-exported-by-module

- Cannot use JSX unless the '--jsx' flag is provided. (ts)

  Add `"jsx": "react"` to `tsconfig.json`

- When `import React from 'react'`, ts trows that **Module declared with 'export =', and can only be used with a default import when using the 'esModuleInterop' flag.**

  Add `"esModuleInterop": true` to `tsconfig.json`

- Missing shims for Node.js built-ins when creating a browser bundle that depends on "stream".

  Need to include https://github.com/FredKSchott/rollup-plugin-polyfill-node

- (!) Plugin typescript: @rollup/plugin-typescript TS2307: Cannot find module './netflixroulette.svg' or its corresponding type declarations.

  Although fixed with: https://www.codegrepper.com/code-examples/typescript/TS2307%3A+Cannot+find+module+%27svg%27+or+its+corresponding+type+declarations. But I still don't understand why ts handle the .svg file ,and why I need to make up with a .d.ts file but svgr didn't do that.

- 'children' is missing in props validation(eslintreact/prop-types)

  https://github.com/jsx-eslint/eslint-plugin-react/issues/2353

  I just solved it by adding `"rules": { "react/prop-types": "off" }` to eslintrc, but I don't know why eslint treats this as an warning

## Issues

- (!) Circular dependencies

  > node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/duplex.js -> node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/readable.js -> node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/duplex.js
  > node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/duplex.js -> node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/writable.js -> node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/duplex.js

  https://github.com/calvinmetcalf/rollup-plugin-node-builtins/issues/39
