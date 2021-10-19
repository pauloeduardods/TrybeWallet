import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import teste from './pages/teste';
import "tailwindcss/tailwind.css"

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/carteira" component={ Wallet } />
      <Route exact path="/teste" component={ teste } />
    </Switch>
  );
}

export default App;
