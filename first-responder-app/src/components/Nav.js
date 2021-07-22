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
                    style={{textDecoration: 'none'}}
                    >
                        Home
                    </NavLink> 
                </li>
                <li>
                    <NavLink 
                    exact
                    to="/about"
                    style={{textDecoration: 'none'}}

                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    exact
                    to="/contact"
                    style={{textDecoration: 'none'}}

                    >
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    exact
                    to="/hospitals"
                    style={{textDecoration: 'none'}}

                    >
                        Hospitals
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    exact
                    to="/patients"
                    style={{textDecoration: 'none'}}

                    >
                        Patients
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    exact
                    to="/patient-form"
                    style={{textDecoration: 'none'}}

                    >
                        Patient Form 
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav 