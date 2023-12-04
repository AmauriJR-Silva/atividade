import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import {Link} from 'react-router-dom'

function Menu(){

    const [paginaAtual, mudaPaginaAtual] = useState('home');

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <div>
       <Navbar color="dark" dark expand="md">
        <Link to="/" className='navbar-brand'>BemEstar</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="/" className={paginaAtual === 'home' ? 'nav-link active' : 'nav-link'} onClick={() =>  mudaPaginaAtual ('home')}>Início</Link>
            </NavItem>
            <NavItem>
              <Link to="/dicas" className={paginaAtual === 'dicas' ? 'nav-link active' : 'nav-link'} onClick={() =>  mudaPaginaAtual ('dicas')}>Dicas</Link>
            </NavItem>
            <NavItem>
              <Link to="/contato" className={paginaAtual === 'contato' ? 'nav-link active' : 'nav-link'} onClick={() =>  mudaPaginaAtual ('contato')}>Contato</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </div>


    )
}

export default Menu