import React from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// fix: An import path cannot end with a '.tsx' extension. Consider importing './App' instead.ts(2691)
// https://github.com/Microsoft/TypeScript/issues/27481
import App from './App'
import ErrorBoundary from './common/ErrorBoundary'
import GlobalStyle from './styles/GlobalStyle'
import { defaultTheme } from './styles/theme'
import store from './store'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: 'search',
        element: <HomePage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          {/* (WIP) GlobalStyle not working */}
          <GlobalStyle />
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
)
