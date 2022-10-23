import React from 'react'
import ReactDOM from 'react-dom/client'
// fix: An import path cannot end with a '.tsx' extension. Consider importing './App' instead.ts(2691)
// https://github.com/Microsoft/TypeScript/issues/27481
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
