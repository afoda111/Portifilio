import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
function Nav() {
    return (
        <div className="navBar">
            <ul className="navLinks">
                <Link to='/test'>
                    <li>Test</li>
                </Link>
                <Link to='/projects'>
                    <li>Projects</li>
                </Link>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/login'>
                    <li>Log-in</li>
                </Link>
            </ul>
        </div>
    )
}

export default Nav
