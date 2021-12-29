import React from 'react';
import './Header.css';

const Header = props => (
    <header className="header container">
        <div className="">
            <h1 className="header_title">Cupcake Shoppe</h1>
            <div className="header_desc">
                Капкейки на замовлення у місті {props.city}
            </div>
        </div>
    </header>
);

export default Header;
