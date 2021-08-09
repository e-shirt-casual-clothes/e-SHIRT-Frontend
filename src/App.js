
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages'
import Inicio from './pages/inicio';
import Projeto from './pages/projeto';
import Sobre from './pages/sobre';
import Studio from './pages/studio';
import Contato from './pages/contato';
import SignUp from './pages/signup';
import Signin from './pages/signin'
  
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/inicio' component={Inicio} />
        <Route path='/projeto' component={Projeto} />
        <Route path='/sobre' component={Sobre} />
        <Route path='/studio' component={Studio} />
        <Route path='/contato' component={Contato} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/signin' component={Signin} />
      </Switch>
    </Router>
  );
}
  
export default App;