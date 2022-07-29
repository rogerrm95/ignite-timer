import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

export type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

// Obs: styles.d.ts //
// O 'd' significa que este arquivo irá apenas ter definições de tipos do Typescript e não código javascript em si //
// Arquvio de definição de tipos //
