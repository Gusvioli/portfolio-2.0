import React from 'react';
import "./styles/home.css";

const Home: React.FC = () => {
    return (
        <section className="section-home" id="home">
            <div className='section-div-home'>
                <h1>Bem vindo ao meu portfólio!</h1>
                <h2>Meu nome é Gustavo Vieira e eu sou um desenvolvedor web.</h2>
                <p>Este é o meu site profissional, onde você pode encontrar informações sobre mim e sobre os meus projetos.</p> 
            </div>
        </section>
    );
};

export default Home;