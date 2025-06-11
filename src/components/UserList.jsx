import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Link } from 'react-router-dom';

const UserList = () => {
    const { users, loading } = useContext(UserContext);

    return (
        <div>
            <h2>Lista de usuarios</h2>
            <Link to="/create"><button>Crear nuevo usuario</button></Link>
            {
                loading ?
                    (<h2>Cargando...</h2>)
                    :
                    (<ul>
                        {users.map((user) => (
                            <li key={user.id}>
                                {user.name}
                                <span> - {user.email} </span>
                                <Link to={`/users/${user.id}`}><button>Ver detalles</button></Link>
                            </li>
                        ))}
                    </ul>)
            }

        </div>
    )
}

export default UserList;