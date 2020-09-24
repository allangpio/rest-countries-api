import React, { useCallback } from 'react';
import { CountryProvider } from './hooks/countries';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/userPesistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Home from './pages/Home';


const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('@rest-countries-api:theme', light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme.title, setTheme]);

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <CountryProvider>
        <Home />
      </CountryProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
