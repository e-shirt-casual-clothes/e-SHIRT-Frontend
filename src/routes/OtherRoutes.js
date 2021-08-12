import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages';
import Inicio from '../pages/inicio';
import Cadastro from '../pages/cadastro';
import Recuperacao from '../pages/recuperacao';
import Login from '../pages/login';


const OtherRoutes = () => {
 return (
  <>
        <Route path="/" exact component={Home} />
        <Route path='/inicio' component={Inicio} />
     <Route path='/cadastro' component={Cadastro} />
         <Route path='/recuperacao' component={Recuperacao} />
         <Route path='/login' component={Login} />
   </>
 );
};

export default OtherRoutes;