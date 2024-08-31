import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './components/GlobalStyles'

const App = React.lazy(() => import('./App.tsx'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <GlobalStyles>
        <App />
      </GlobalStyles>
  </React.StrictMode>,
)
