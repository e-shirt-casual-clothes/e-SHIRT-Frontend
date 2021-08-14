import React from 'react';
import { Link } from 'react-router-dom';

const Studio2 = () => {
    return (

        <div class="container">
            <div class="top">

            </div>
            <div class="login-box animated fadeInUp">
                <div class="box-header">
                    <h2>Studio 3D</h2>
                </div>
                <div>
                    <h3>Para acessar você precisa estar logado!!!!</h3>

                    <br />
                    <Link to="/cadastro" ><p class="small">Não tem cadastro? Clique aqui!</p> </Link>
                    <br />
                    <Link to="/login" ><p class="small">Já tem cadastro? Clique aqui!</p></Link>
                </div>
            </div>
        </div>

    );
};

export default Studio2;