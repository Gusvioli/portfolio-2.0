
import React, { useContext } from 'react';
import './styles/menu.css'
import Context from '../../context/Context';

const NoMenu: React.FC = () => {
    const { menu, setMenu } = useContext(Context);
    return (                  
        <div className="nomenu" id="nomenu">
            <a className="linha" onClick={() => setMenu(!menu)}>
                <div className='linha1'></div>
                <div className='linha2'></div>
                <div className='linha3'></div>
            </a>
        </div>
    );
}

export default NoMenu;