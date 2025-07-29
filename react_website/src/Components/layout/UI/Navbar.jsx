import { useState } from "react";
import "../../../css/Navbar.css"; 
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
                    <div className="logo">

                        <NavLink to="/">
                            <img 
                              src="/images/logo.png" 
                              alt="Ahmad Website Logo" 
                              style={{ height: "70px", cursor: "pointer" }} 
                            />
                        </NavLink>
                    </div>
                    <nav className={showMenu ? "menu-mobile" : "menu-web"}>
                        <ul className="nav-links">
                            <li><NavLink to="">Home</NavLink></li>
                            <li><NavLink to="about">About</NavLink></li>
                            <li><NavLink to="product">Products</NavLink></li>
                            <li><NavLink to="contact">Contact</NavLink></li>
                        </ul>
                    </nav>
                    <div className="ham-menu">
                        <button onClick={handleButtonToggle}>
                            <GiHamburgerMenu />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
