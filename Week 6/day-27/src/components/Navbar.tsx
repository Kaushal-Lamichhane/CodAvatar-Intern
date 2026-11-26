

import {NavLink} from 'react-router-dom'


function Navbar() {
    return(
        <nav>
            <h2> TaskFlow </h2>

            <div>
                <NavLink to="/dashboard">
                    Dashboard
                </NavLink>

                <NavLink to="/task/1">
                    Sample Task
                </NavLink>
            </div>
        </nav>
    )
};

export default Navbar