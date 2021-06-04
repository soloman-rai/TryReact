import React, { useState, useEffect } from 'react'

import '../assets/Navbar.css';


function Navbar() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false)
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo" src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg" alt="Netflix Logo" />

            <img className="nav_avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="User Avatar" />
        </div>
    )
}

export default Navbar
