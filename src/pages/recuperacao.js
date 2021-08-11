import React from 'react';
import { Link } from 'react-router-dom';

const Recuperacao = () => {
	return (

		<div class="container">
			<div class="top">

			</div>
			<div class="login-box animated fadeInUp">
				<div class="box-header">
					<h2>Recuperação de conta</h2>
                </div>
                <label for="username">Digite seu email</label>
				<br />
				<input type="text" id="username" />
				<br />
                <br />
				<button type="submit">Enviar</button>
				<br />
				<Link to="/cadastro" ><p class="small">Não tem cadastro? Clique aqui!</p> </Link>
			</div>
		</div>

	);
};

export default Recuperacao;