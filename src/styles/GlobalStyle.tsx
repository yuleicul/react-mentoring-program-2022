import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Montserrat', 'Courier New', Courier, monospace;
    background-color: #888888;
  }

  button {
    cursor: pointer;
  }
`

export default GlobalStyle
