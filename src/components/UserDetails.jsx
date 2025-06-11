import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useParams, Link } from 'react-router-dom'

const UserDetails = () => {
  const { id } = useParams()

  const { users } = useContext(UserContext)

  const user = users.find(user => user.id === id)

  if (!user) {
    return <h2>Usuario no encontrado</h2>
  }


  return (
    <div style={{margin: `10px`, padding: `10px`}}>
      <h2>Detalles de Usuario</h2>

      <div style={{ border: `2px solid #FFD43B`, borderRadius: `10px`, margin: `20px`, padding: `20px` }}>
        <img src={user.avatar} alt={`${user.name}'s avatar`} style={{ width: '100px', height: '100px', borderRadius: `50%` }} />        
        <p><strong>Nombre:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>País:</strong> {user.country}</p>
        <p><strong>Género:</strong> {user.gender}</p>      
        <p><strong>ID:</strong> {user.id} </p>        
      </div>

      <div>
        <Link to={`/delete/${user.id}`}><button>Eliminar Usuario</button></Link>
        <Link to={`/edit/${user.id}`}><button>Editar Usuario</button></Link>
        <Link to="/userList"><button>Volver a la lista de usuarios</button></Link>
      </div>
    </div>
  )
}

export default UserDetails