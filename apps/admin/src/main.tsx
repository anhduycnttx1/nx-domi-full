import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import App from './app/app'
import './assets/css/style.css'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  </StrictMode>
)
