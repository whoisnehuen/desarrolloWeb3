import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useParams, useNavigate } from 'react-router-dom'
const UserDelete = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { users, handleDeleteUser } = useContext(UserContext)

  const userToDelete = users.find(user => user.id === id)

  if (!userToDelete) {
    return <h2>Usuario no encontrado</h2>
  }

  const handleDelete = () => {
    handleDeleteUser(id)
    navigate('/userList')
  }

  const handleCancel = () => {
    navigate('/users/' + id)
  }

  return (
    <div>
      <h2>Eliminar usuario: {userToDelete.name}</h2>
      <p>¿Estás seguro de que deseas eliminar este usuario?</p>
      <button onClick={handleDelete}>Si, eliminar</button>
      <button onClick={handleCancel}>No, cancelar</button>
    </div>
  )
}

export default UserDelete