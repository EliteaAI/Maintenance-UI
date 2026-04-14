import React from 'react';

import ReactDOM from 'react-dom/client';

import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';

import App from './App';
import MainTheme from './MainTheme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={MainTheme}>
      <CssBaseline />
      <GlobalStyles
        styles={theme => ({
          body: {
            background: theme.palette.background.eliteaDefault,
          },
          html: {
            background: theme.palette.background.eliteaDefault,
          },
          '#root': {
            background: theme.palette.background.eliteaDefault,
          },
        })}
      />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
