import React from "react";
import "../styles/components/Header.css";

const Header = () => {
    return (
        <header className="Header">
            <div className="container">
                <nav>
                    <ul className="nav-links">
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
