import React, {createContext, useEffect, useState} from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
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

    
    const handleCreateUser=(newUser)=>{
        fetch(apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(response => response.json())
        .then((createdUser) => {
            setUsers([...users, createdUser]);
            setNewUserName('');
        })
        .catch((error) => {
            console.error("Error al crear usuario:", error);
        });
            
    }


    const handleUpdateUser = (id, updatedUser) => {
        fetch(`${apiURL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then((updatedData) => {
            setUsers(prevUsers => prevUsers.map(user => user.id === id ? updatedData : user));
        })
        .catch((error) => {
            console.error("Error al actualizar el usuario:", error);
        });
    }

    const handleDeleteUser = (id) => {
    fetch(`${apiURL}/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
    })
    .catch((error) => {
        console.error("Error al eliminar usuario:", error);
    });
}



    return(
        <UserContext.Provider value={{users, setUsers, loading, setLoading, newUserName, setNewUserName, selectedUser, setSelectedUser, handleCreateUser, handleUpdateUser, handleDeleteUser}}>
            {children}
        </UserContext.Provider>
    )

}
