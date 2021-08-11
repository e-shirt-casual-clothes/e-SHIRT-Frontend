import React from 'react';
import { Link } from 'react-router-dom';

const cadastro = () => {
  return (
    <div class="container">
      <div class="cadastro animated fadeInUp">
        <div class="box-header">
          <h2>Cadastro</h2>
        </div>
      <br/>
      <table border="0">
   <tr><td><label for="User">Nome:</label>
            <input id="User" name="User" required="required" type="text" placeholder="Digite seu nome completo" /></td>
            <td><label for="Phone">Tel/Cel:</label>
            <input id="Phone" name="Phone" required="required" type="text" placeholder="Digite seu telefone" /></td>
            </tr>
   <tr><td><label for="Street">Rua/Av.:</label>
            <input id="Street" name="Street" required="required" type="text" placeholder="Digite seu endereço" /></td>
            <td><label for="District"><b>Bairro:</b></label>
            <input id="District" name="District" required="required" type="text" placeholder="Digite seu bairro" /></td>
            <td></td>
            </tr>
            <tr><td><label for="City">Cidade:</label>
            <input id="City" name="City" required="required" type="text" placeholder="Digite sua Cidade" /></td>
            <td><label for="State"><b>Estado:</b></label>
            <input id="State" name="State" required="required" type="text" placeholder="Digite seu Estado" /></td>
            <td></td>
            </tr>
            <tr><td><label for="Email">E-mail:</label>
            <input id="Email" name="Email" required="required" type="email" placeholder="digite seu email"/></td>
            <td><label for="Email">E-mail:</label>
            <input id="Email" name="Email" required="required" type="email" placeholder="repita seu email"/></td>
            <td></td>
            </tr>
            <tr><td><label for="Password">Senha:</label>
            <input id="Password" name="Password" required="required" type="password" placeholder="digite sua senha"/></td>
            <td><label for="Password">Senha:</label>
            <input id="Password" name="Password" required="required" type="password" placeholder="repita sua senha"/></td>
            <td></td>
            </tr>       
          </table>
          <br />
				<button type="submit">Cadastrar</button>
				<br />
        <Link to="/login" ><p class="small">Já tem cadastro? Clique aqui!</p></Link>
      </div>
    </div>
  );
};

export default cadastro;