// Components/UserDetail.jsx
import React from 'react';
import '../index.css';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    const { user_id } = useParams();

    const users = [
        {
            id: 1,
            name: 'Laura Perez',
            email: 'asdf@gmail.com',
            age: 28,
            active: true,
            rules: ['admin', 'editor']
        },
        {
            id: 2,
            name: 'John Smith',
            email: 'jhonsmith@gmail.com',
            age: 34,
            active: true,
            rules: ['user']
        },
        {
            id: 3,
            name: 'Alice Johnson',
            email: 'alice@gmail.com',
            age: 25,
            active: false,
            rules: ['user']
        },
        {
            id: 4,
            name: 'Bob Brown',
            email: 'bobbo@gmail.com',
            age: 45,
            active: true,
            rules: ['admin']
        }
    ];

    const user = users.find((u) => u.id === Number(user_id));

    if (!user) {
        return <p>Usuario no encontrado</p>;
    }

    return (
        <div className="user-card">
            <h2 className="user_name">{user.name}</h2>
            <p>
                <strong>Email:</strong> {user.email}
            </p>
            <p>
                <strong>Age:</strong> {user.age}
            </p>
            <p>
                <strong>Status:</strong>{' '}
                <span className={user.active ? 'status_active' : 'status_inactive'}>
                    {user.active ? 'Active' : 'Inactive'}
                </span>
            </p>
            <p>
                <strong>Roles:</strong> {user.rules.join(', ')}
            </p>
        </div>
    );
};

export { UserDetail };
