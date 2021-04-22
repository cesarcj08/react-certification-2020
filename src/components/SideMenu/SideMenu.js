import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideMenu.styles.css'
/**ToDo: implementar dark theme en el menu lateral */
function SideMenu(){
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    
    return(
        <>
            <nav className={sidebar ? "sidebar active" : "sidebar"}>
                <button className="hamburger" type="button" onClick={showSidebar}>
                    <div></div>
                </button>
                <ul onClick={showSidebar}>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/favoritos">Favoritos</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default SideMenu;