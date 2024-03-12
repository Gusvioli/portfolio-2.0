    
import React, { useContext } from 'react';
import './styles/menu.css'
import Context from '../../context/Context';

const FecharMenu: React.FC = () => {
    const { menu, setMenu } = useContext(Context);
    return (
        <div className="fecharmenu" id="fecharmenu">
            <a className="linha" onClick={() => setMenu(!menu)}>     
                <div className='x1'></div>
                <div className='x2'></div>
            </a>
        </div>
    );
}

export default FecharMenu;