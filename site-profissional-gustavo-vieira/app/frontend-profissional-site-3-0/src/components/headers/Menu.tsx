
import React from 'react';
import './styles/menu.css'
import FechaMenu from './FecharMenu';

const Menu: React.FC = () => {
    return (
        <nav>            
            <div className="menu" id="menu">
                <FechaMenu />
                <a href="#home">Home</a>
                <a href="#habilidades">Habilidades</a>
                <a href="#meusprojetos">Meus projetos</a>
                <a href="#redes">Redes</a>
                <a href="#services">Serviços</a>
            </div>
        </nav>
    );
}

export default Menu;