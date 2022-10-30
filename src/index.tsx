import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
// fix: An import path cannot end with a '.tsx' extension. Consider importing './App' instead.ts(2691)
// https://github.com/Microsoft/TypeScript/issues/27481
import App from './App'
import ErrorBoundary from './common/ErrorBoundary'
import GlobalStyle from './styles/GlobalStyle'
import { mainTheme } from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
)
