// Screens/Users.jsx
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Users = () => {
    return (
        <section>
            <header>
                <nav>
                    <ol>
                        <li>
                            <NavLink to="1">User 1</NavLink>
                        </li>
                        <li>
                            <NavLink to="2">User 2</NavLink>
                        </li>
                        <li>
                            <NavLink to="3">User 3</NavLink>
                        </li>
                        <li>
                            <NavLink to="4">User 4</NavLink>
                        </li>
                    </ol>
                </nav>
            </header>
            <hr />
            <Outlet />
        </section>
    );
};

export { Users };
