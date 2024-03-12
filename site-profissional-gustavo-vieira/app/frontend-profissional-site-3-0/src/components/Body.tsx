import React from 'react';
import Home from './bodys/home/Home';
import Habilidades from './bodys/habilidades/Habilidades';
import Projetos from './bodys/projetos/Projetos';
import Redes from './bodys/redes/Redes';
import Servicos from './bodys/servicos/Servicos';

interface BodyProps {
    // Define the props for the Body component here
}

const Body: React.FC<BodyProps> = () => {
    return (
        <>
            <Home />
            <Habilidades />
            <Projetos />
            <Redes />
            <Servicos />
        </>
    );
};

export default Body;