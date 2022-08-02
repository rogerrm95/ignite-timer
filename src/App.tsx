import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { defaultTheme } from './styles/themes/default'
import CyclesContextProvider from './contexts/CycleContext'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CyclesContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </CyclesContextProvider>
    </ThemeProvider>
  )
}
