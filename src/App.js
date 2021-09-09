import React from 'react';
import { Switch } from 'react-router';

import './styles/main.scss';
import 'rsuite/dist/styles/rsuite-default.css';
import SingnIn from './pages/SignIn';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/home/Home';
import PublicRoute from './components/PublicRoute';
import { ProfileProvider } from './context/profile.context';

function App() {
  return (
    <ProfileProvider>
      <Switch>
        <PublicRoute path="/signin">
          <SingnIn />
        </PublicRoute>
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </ProfileProvider>
  );
}

export default App;
