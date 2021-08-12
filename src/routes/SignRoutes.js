import React from 'react';
import { Route } from 'react-router-dom';
import Projeto from '../pages/projeto';
import Sobre from '../pages/sobre';
import Studio from '../pages/studio';
import Contato from '../pages/contato';
import Inicio from '../pages/inicio';



const SignRoutes = () => {
 return (
   <>
   
        <Route path='/inicio' component={Inicio} />
        <Route path='/projeto' component={Projeto} />
        <Route path='/sobre' component={Sobre} />
        <Route path='/studio' component={Studio} />
        <Route path='/contato' component={Contato} />
        
        
   </>
 );
};

export default SignRoutes;