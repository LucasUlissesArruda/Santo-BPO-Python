
import { createTheme } from '@mui/material/styles';

const customColors = {
  primary: '#9D7E52',
  background: '#FFFFFF',
  shadow: '#E6C8A1',
};

const theme = createTheme({
  palette: {
    primary: {
      main: customColors.primary,
    },
    background: {
      default: customColors.background,
    },
  },
  typography: {
    h1: {
      fontFamily: '"Dancing Script", cursive',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Dancing Script", cursive',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Dancing Script", cursive',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Dancing Script", cursive',
      fontWeight: 700,
    },
    h5: {
      fontFamily: '"Dancing Script", cursive',
      fontWeight: 700,
    },
  },
  shadows: [
    'none',
    `0px 2px 4px -1px ${customColors.shadow}`, 
    ...Array(23).fill('none'), 
  ],
});

export default theme;