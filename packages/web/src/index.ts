import { createStitches, defaultThemeMap } from '@stitches/react'
import type * as Stitches from '@stitches/react'

const baseColors = {
  light: 'black',
  mid: 'black',
  dark: 'black',
  low: 'black',

  black: '#0000',
  white: '#FFFF',

  'grey-100': '#e9e9e9',
  'grey-200': '#d9d9d9',
  'grey-300': '#c4c4c4',
  'grey-400': '#9d9d9d',
  'grey-500': '#7b7b7b',
  'grey-600': '#555555',
  'grey-700': '#434343',
  'grey-800': '#262626',
  'grey-900': '#09090A',
}
export const {
  config,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  ...baseColors,
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
    opacity: 'opacity',
  },
  theme: {
    space: {
      px: '1px',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
    },
    fontSizes: {
      xxs: '0.625rem',
      xs: '0.75rem',
      sm: '0.8725rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '4xl': '2rem',
      '5xl': '2.5rem',
      '6xl': '3rem',
      '7xl': '3.5rem',
      '8xl': '4rem',
    },
    fonts: {
      default: 'Roboto, sans-serif',
      reading: 'Spectral, serif',
    },
    fontWeights: {
      regular: 'regular',
      medium: 'medium',
      bold: 'bold',
    },
    lineHeights: {
      shorter: '125%',
      short: '140%',
      base: '160%',
      tall: '180%',
    },
    borderWidths: {
      thin: '1px',
      medium: '1.5px',
      thick: '2px',
      heavy: '4px',
    },
    radii: {
      xs: '2.5px',
      sm: '5px',
      md: '10px',
      lg: '20px',
      full: '99999px',
    },
    zIndices: {
      modal: 99999,
      overlay: 99995,
    },
    opacity: {
      default: '100%',
      semiOpaque: '90%',
      intense: '75%',
      medium: '50%',
      light: '25%',
      semiTransparent: '10%',
    },
    media: {
      mobile: '(max-width: 768px)',
    },
  },
})
