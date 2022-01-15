import React, { useState, useEffect } from 'react';
import '../assets/styles/navbar.css';

export default function NavBar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {
        const changeWidths = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidths)

        return () => {
            window.removeEventListener('resize', changeWidths);
        }

    }, [])

    return (
        <header>
            <nav className="nav navbar">
                <div className="navbar-brand">
                    <a href="#home"><span id="grigoris">G</span>rigoris</a>
                </div>
                {(toggleMenu || screenWidth > 940) && (
                    <ul className="list">
                        <li className="items"><a href="#home">Home</a></li>
                        <li className="items"><a href="#about">About</a></li>
                        <li className="items"><a href="#projects">Projects</a></li>
                        <li className="items"><a href="#skills">Skills</a></li>
                        <li className="items"><a href="#contact">Contact Me</a></li>
                    </ul>
                )}

                <button className="hamburgerBtn" onClick={toggleNav}><div></div></button>
            </nav>
        </header>
    );
}
