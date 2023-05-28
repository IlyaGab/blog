import { AppTheme } from '../shared/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}