import { useContext } from 'react';
import Context from '../../../context/Context';
import '../../../styles/components-styles/pop-Up-Info-Meus-Projetos.css';

const PopUpInfoMeusProjetos = () => {
    const {setExibirPopUpInfoMeusProjetos} = useContext(Context);

    const handleClosePopUpInfo = () => {
        setExibirPopUpInfoMeusProjetos(false);
    };

    return (
        <section
            className='pop-Up-Info-Meus-Projetos'
            id="pop-Up-Info-Meus-Projetos"
        >
            
            <div
                className="pop-Up-Info-Meus-Projetos-close"
                id="pop-Up-Info-Meus-Projetos-close"
                onClick={() => handleClosePopUpInfo()}
            >
                <a className="pop-Up-Info-Meus-Projetos-close-traco">
                    <div className='traco1-x'></div>
                    <div className='traco2-x'></div>
                </a>

            {/* <div className="div-li-nome">{projetos[ret - 1].nome}</div>
            <div className="div-li-descricao">{projetos[ret - 1].desc}</div>
            <div className="div-li-tecs">{projetos[ret - 1].tecs.map((tecnologia: string, index: number) => {
                    return (
                        <span key={index} className="span-tecnologia">{tecnologia}</span>
                    );
                })}
            </div>
            <a className="a-li" target="_black" href={projetos[ret - 1].link}>Abrir projeto</a> */}
            </div>
        </section>

    );
};

export default PopUpInfoMeusProjetos;