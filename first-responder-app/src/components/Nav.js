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
                    style={{textDecoration: 'none', color: 'blue'}}
                    >
                        Home
                    </NavLink> 
                </li>
                <li>
                    <NavLink 
                    exact
                    to="/about"
                    style={{textDecoration: 'none', color: 'blue'}}

                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    exact
                    to="/contact"
                    style={{textDecoration: 'none', color: 'blue'}}

                    >
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    exact
                    to="/hospitals"
                    style={{textDecoration: 'none', color: 'blue'}}

                    >
                        Hospitals
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    exact
                    to="/patients"
                    style={{textDecoration: 'none', color: 'blue'}}

                    >
                        Patients
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    exact
                    to="/patient-form"
                    style={{textDecoration: 'none', color: 'blue'}}

                    >
                        Patient Form 
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav 