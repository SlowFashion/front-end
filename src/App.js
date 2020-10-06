import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import CreateAccount from './pages/createAccount';
import SignIn from './pages/signIn';
import Product from './pages/product';
import { Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route exact path='/createAccount' component={CreateAccount} />
      <Route exact path='/signIn' component={SignIn} />
      <Route exact path='/product/:id' component={Product} />
    </div>
  );
}

export default App;
