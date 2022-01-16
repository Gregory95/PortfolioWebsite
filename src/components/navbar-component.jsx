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
            <nav className="nav navbar">
                <div className="navbar-brand">
                    <Link className="link" to="home"><span id="grigoris">G</span>rigoris</Link>
                </div>
                {(toggleMenu || screenWidth > 940) && (
                    <ul className="list">
                        <li className="items"><Link className="link" to="home">Home</Link></li>
                        <li className="items"><Link className="link" to="about">About</Link></li>
                        <li className="items"><Link className="link" to="projects">Projects</Link></li>
                        <li className="items"><Link className="link" to="skills">Skills</Link></li>
                        <li className="items"><Link className="link" to="contact">Contact Me</Link></li>
                    </ul>
                )}

                <button className="hamburgerBtn" onClick={toggleNav}><div></div></button>
            </nav>
        </header>
    );
}
