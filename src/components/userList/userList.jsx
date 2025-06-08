import React, { useState, useEffect } from "react";

const UserList = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true);
    const [newUserName, setNewUserName] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const apiURL = "https://6844ab4a71eb5d1be033dde6.mockapi.io/prueba"

    useEffect(() => {
        fetch(apiURL)
            .then((response) => response.json())
            .then(data => {
                setLoading(false)
                setUsers(data)
            })
            .catch((error) => {
                setLoading(false)
                console.log("Error al obtener usuarios:", error)
            })
    }, [apiURL])

    const createNewUser = () => {
        fetch(apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: newUserName })
        })
            .then(res => res.json())
            .then(() => {
                setNewUserName('')
            })
            .then(() => {
                return fetch(apiURL)
            })
            .then((response) => response.json())
            .then(data => {
                setUsers(data)
            })
            .catch((error) => {
                console.log("Error al obtener usuarios:", error)
            })
    }

     const handleUpdateUser = () => {
        if (!selectedUser) return;
        fetch(`${apiURL}/${selectedUser.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({ name: newUserName }),
        })
            .then((response) => response.json())
            .then((updatedUser) => {
                setUsers(users.map((user) => (user.id === selectedUser.id ? updatedUser : user)));
                setNewUserName('');
                setSelectedUser(null);
            })
            .catch((error) => console.error('Error al actualizar usuario:', error));
    };

     const handleDeleteUser = (userId) => {
        fetch(`${apiURL}/${userId}`, {
            method: 'DELETE',
        })
            .then(() => {
                setUsers(users.filter((user) => user.id !== userId));
                setNewUserName('');
                setSelectedUser(null);
            })
            .catch((error) => console.error('Error al eliminar usuario:', error));
    };




    return (
        <div>
            <h2>Lista de usuarios</h2>
            {
                loading ?
                    (<h3>Cargando...</h3>)
                    :
                    (<ul>
                        {users.map((user) => (
                            <li key={user.id}>
                                {user.name}
                                {user.status && <span> - {user.status}</span>}
                                {user.avatar && <img src={user.avatar} alt={user.name} style={{ width: '50px', height: '50px', paddingLeft: "30px" }} />}    
                                <br/>                            
                                <button onClick={() => setSelectedUser(user)}>Seleccionar para editar</button>                                
                                <button onClick={() => handleDeleteUser(user.id)}>Eliminar</button>
                                <hr/>
                            </li>
                        ))}
                    </ul>)
            }
            <div>
                <input
                  type="text"
                  value={newUserName}
                  onChange={(e)=> setNewUserName(e.target.value)}
                  placeholder="Nombre del usuario"  
                />

                {
                    selectedUser ?
                    (<button onClick={handleUpdateUser}>Actualizar usuario</button>)
                    :
                    (<button onClick={createNewUser}>Crear usuario</button>)
                }
            </div>
        </div>
    )
}

export default UserList;