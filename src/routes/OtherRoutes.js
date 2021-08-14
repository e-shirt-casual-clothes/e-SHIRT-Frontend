import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages';
import Inicio from '../pages/inicio';
import Cadastro from '../pages/cadastro';
import Recuperacao from '../pages/recuperacao';
import Login from '../pages/login';
import Projeto from '../pages/projeto';
import Sobre from '../pages/sobre';
import Contato from '../pages/contato';
import Studio2 from '../pages/studio2'


const OtherRoutes = () => {
      return (
            <>
            <Route path="/" exact component={Home} />
            <Route path='/inicio' component={Inicio} />
            <Route path='/cadastro' component={Cadastro} /> 
            <Route path='/recuperacao' component={Recuperacao} />
            <Route path='/login' component={Login} />
            <Route path='/projeto' component={Projeto} />
            <Route path='/sobre' component={Sobre} />
            <Route path='/contato' component={Contato} />
            <Route path='/studio' component={Studio2} />
            </>
      );
};

export default OtherRoutes;