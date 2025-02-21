import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../../Media/sripada logo2.png';
import { Link as RouterLink, useLocation } from 'react-router-dom'; 

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation(); 

    const toggleMenu = () => {
        setMenu(!menu);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`Navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="logotext">
                <RouterLink to="/" className={location.pathname === "/" ? "active" : ""}><img className="nav-img" src={logo} alt="Signature" /></RouterLink>
                    
                </div>

                <ul className={`menubar ${menu ? 'open' : ''}`}>
                    <li>
                        <RouterLink to="/" className={location.pathname === "/" ? "active" : ""}>Home</RouterLink>
                    </li>
                    <li className="dropdown">
                        <RouterLink to="/courses" className={location.pathname === "/courses" ? "active" : ""}>Courses</RouterLink>
                        
                    </li>
                    
                  {/*   <li>
                        <RouterLink to="/jobupdates" className={location.pathname === "/jobupdates" ? "active" : ""}>Job Updates</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/internship" className={location.pathname === "/internship" ? "active" : ""}>Internship</RouterLink>
                    </li>
                    */}
                    
                    <li>
                        <RouterLink to="/contactus" className={location.pathname === "/contactus" ? "active" : ""}>Contact Us</RouterLink>
                    </li>
                </ul>
                

                <div className="menu-option" onClick={toggleMenu}>
                    ☰
                </div>
            </div>

            <div onClick={toggleMenu} className={`menu-list ${menu ? 'show-menu' : ''}`}>
                <div className='wrong' onClick={toggleMenu}>⛌</div>
                <ul>
                    <li>
                        <RouterLink to="/" onClick={toggleMenu} className={location.pathname === "/" ? "active" : ""}>
                            Home
                        </RouterLink>
                    </li>
                    <li className="dropdown">
                        <RouterLink to="/courses" onClick={toggleMenu} className={location.pathname === "/courses" ? "active" : ""}>Courses</RouterLink>
                        
                    </li>
                    {/* <li>
                        <RouterLink to="/jobupdates" onClick={toggleMenu} className={location.pathname === "/jobupdates" ? "active" : ""}>
                            Job Updates
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/internship" onClick={toggleMenu} className={location.pathname === "/internship" ? "active" : ""}>
                            Internship
                        </RouterLink>
                    </li>  */}
                    
                    <li>
                        <RouterLink to="/contactus" onClick={toggleMenu} className={location.pathname === "/contactus" ? "active" : ""}>
                            Contact Us
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
