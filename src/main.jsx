import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
      :root {
      --sans: system-ui, 'Segoe UI', Roboto, sans-serif;
      --heading: system-ui, 'Segoe UI', Roboto, sans-serif;
      --mono: ui-monospace, Consolas, monospace;


      font: 18px/145% var(--sans);
      letter-spacing: 0.18px;
      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      
}
      
      html,
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          background: linear-gradient(97.54deg, rgb(0, 47, 82) 35.49%, rgb(50, 101, 137) 165.37%);
        }

  li{
    list-style: none;
    }
}

`
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
)
