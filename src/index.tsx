import React from 'react'
import ReactDOM from 'react-dom/client'
// fix: An import path cannot end with a '.tsx' extension. Consider importing './App' instead.ts(2691)
// https://github.com/Microsoft/TypeScript/issues/27481
import App from './App'
import ErrorBoundary from './common/ErrorBoundary'
import GlobalStyle from './styles/GlobalStyle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <GlobalStyle />
      <App />
    </ErrorBoundary>
  </React.StrictMode>
)
