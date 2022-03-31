import React from 'react';
import camera from '../Header/camera.svg';

const Header = () => {
    return (
        <section className="header">
            <h1>
                <img className="logo" src={camera} alt="Logo" />
                V našem kině právě uvádíme
            </h1>
        </section>
    )
};



export default Header;