// App.jsx
import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import { Cart } from './Screens/Cart';
import { Home } from './Screens/Home';
import { Users } from './Screens/Users';
import { UserDetail } from './Components/UserDetail';

function App() {
    return (
        <main>
            <nav>
                <ul>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? 'active-link' : '')}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/cart"
                        className={({ isActive }) => (isActive ? 'active-link' : '')}
                    >
                        Cart
                    </NavLink>

                    <NavLink
                        to="/users"
                        className={({ isActive }) => (isActive ? 'active-link' : '')}
                    >
                        Users
                    </NavLink>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/users" element={<Users />}>
                    <Route path=":user_id" element={<UserDetail />} />
                </Route>
            </Routes>
        </main>
    );
}

export default App;
