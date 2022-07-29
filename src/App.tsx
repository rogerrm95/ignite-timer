import { Button } from "./components/Button";
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <Button variant="success" />
        <Button variant="danger" />
      </ThemeProvider>
    </div>
  )
}