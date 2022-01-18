import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

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
            <nav className="nav navbar fixed-top">
                <div className="navbar-brand">
                    <Link className="link" to="home"><span id="grigoris">G</span>rigoris</Link>
                </div>
                {(toggleMenu || screenWidth > 940) && (
                    <ul className="list">
                        <li className="items"><Link className="link" to="home" onClick={toggleNav}>Home</Link></li>
                        <li className="items"><Link className="link" to="about" onClick={toggleNav}>About</Link></li>
                        <li className="items"><Link className="link" to="projects" onClick={toggleNav}>Projects</Link></li>
                        <li className="items"><Link className="link" to="skills" onClick={toggleNav}>Skills</Link></li>
                        <li className="items"><Link className="link" to="contact" onClick={toggleNav}>Contact Me</Link></li>
                    </ul>
                )}

                <button className="hamburgerBtn" onClick={toggleNav}><div></div></button>
            </nav>
        </header>
    );
}
