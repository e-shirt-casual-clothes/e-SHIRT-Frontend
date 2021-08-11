import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	return (

		<div class="container">
			<div class="top">

			</div>
			<div class="login-box animated fadeInUp">
				<div class="box-header">
					<h2>Acessar</h2>
				</div>
				<label for="username">E-mail Id</label>
				<br />
				<input type="text" id="username" />
				<br />
				<label for="password">Senha</label>
				<br />
				<input type="password" id="password" />
				<br />
				<button type="submit">Entrar</button>
				<br />
				<Link to="/recuperacao"><p class="small">Esqueçeu E-mail / Senha?</p></Link>
				<Link to="/cadastro"  ><p class="small">Não tem cadastro? Clique aqui!</p> </Link>
			</div>
		</div>

	);
};

export default Login;