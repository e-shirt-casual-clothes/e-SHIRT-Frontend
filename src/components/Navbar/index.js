import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
     <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/inicio' activeStyle>
            Inicio
          </NavLink>
          <NavLink to='/studio' activeStyle>
            3D Studio
          </NavLink>
          <NavLink to='/sobre' activeStyle>
            Sobre
          </NavLink>
          <NavLink to='/projeto' activeStyle>
            Projeto
          </NavLink>
          <NavLink to='/contato' activeStyle>
            Contato
          </NavLink>
          <NavLink to='/cadastro' activeStyle>
            Cadastro
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Entrar</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;