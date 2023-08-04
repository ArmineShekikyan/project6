import React from 'react';
import { Link } from "react-router-dom";
import { headerData } from "./data";
const Header = () => {
    return(
     <div className="nav"> 
     <img src="/logo.png" alt="Logo" />
        {headerData.map(({title, path} )=> (
            <Link to={path}>{title}</Link>
        ))}
        <hr/>
    </div>
    )
}

export default Header;