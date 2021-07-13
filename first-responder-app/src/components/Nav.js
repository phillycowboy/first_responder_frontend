import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => {
    return(
        <div className="nav">
            <ul>
                <li>
                    <NavLink 
                    exact
                    to="/"
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    exact
                    to="/about"
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    exact
                    to="/contact"
                    >
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    exact
                    to="/Hospitals"
                    >
                        Hospitals
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav 