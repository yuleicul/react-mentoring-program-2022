// Cloned from kether-react src/typings.d.ts
declare module '*.svg' {
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >

  const src: typeof ReactComponent
  export default src
}
