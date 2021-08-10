import React from 'react';

const Signin = () => {
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
				<a href="#"><p class="small">Esqueçeu E-mail / Senha?</p></a>
			</div>
		</div>

	);
};

export default Signin;