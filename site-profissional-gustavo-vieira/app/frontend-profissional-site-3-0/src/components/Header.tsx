
import React, { useContext, useEffect } from 'react';
import Menu from './headers/Menu';
import NoMenu from './headers/NoMenu';
import Context from '../context/Context';

const Header: React.FC = () => {
    const { menu, setMenu } = useContext(Context);
    
    useEffect(() => {            
        const time =  setTimeout(() => {
             setMenu(false)
         }, 5000);

        if (menu) {
            time;
        } else {
            clearTimeout(time);
        }        
    }, [menu, setMenu]);    

    return (
        <header>
            {menu ? <Menu /> : <NoMenu />}
        </header>
    );
}

export default Header;