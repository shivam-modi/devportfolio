import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import THEMES from './constants/theme'
import {getTheme} from './functions/getTheme'

function App() {
  const [themeName, setThemeName] = React.useState(THEMES.DARCULA)
  return (
    <ThemeProvider theme={getTheme(themeName)}>
      <AuthWrapper>
        <Router>
          <Switch>
            <PrivateRoute path="/" exact component={Dashboard} />
            <Route path="/login" exact component={Login} />
            <Route component={Error} />
          </Switch>
        </Router>
      </AuthWrapper>
    </ThemeProvider>
  );
}

export default App;
