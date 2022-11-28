// Cloned from kether-react src/typings.d.ts
declare module '*.svg' {
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >

  const src: typeof ReactComponent
  export default src
}

// https://github.com/rollup/rollup-plugin-url/issues/22#issuecomment-497310043
declare module '*.png' {
  const value: string
  export default value
}
