import { useState } from "react";
import "../../../layoutcss/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleButtonToggle = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header>
            <div className="container">
                <div className="grid navbar-grid">
                    {/* Hamburger menu button on left */}
                    <div className="ham-menu">
                        <button onClick={handleButtonToggle}>
                            <GiHamburgerMenu />
                        </button>
                    </div>

                    {/* Logo centered */}
                    <div className="logo">
                        <NavLink to="/" className="logo-text" onClick={() => setShowMenu(false)}>
                            <span className="logo-cbr">CBR</span>
                            <span className="logo-vibes">VIBES</span>
                        </NavLink>
                    </div>

                    {/* Navigation menu */}
                    <nav className={showMenu ? "menu-mobile" : "menu-web"}>
                        <ul className="nav-links">
                            <li><NavLink to="/" onClick={() => setShowMenu(false)}>Home</NavLink></li>
                            <li><NavLink to="about" onClick={() => setShowMenu(false)}>About</NavLink></li>
                            <li><NavLink to="product" onClick={() => setShowMenu(false)}>Products</NavLink></li>
                            <li><NavLink to="contact" onClick={() => setShowMenu(false)}>Contact</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};
