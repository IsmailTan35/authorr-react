import React from 'react';
import { ReactComponent as Logo } from '../assets/img/brew.svg';
import "../assets/css/header.css"

const Header = () => {
    return (
        <>
            <div className="header">
                <Logo style={{width:135,height:40}}/>
            </div>
        </>
    );
};

export default Header;