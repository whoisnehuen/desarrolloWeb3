import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useParams, useNavigate } from 'react-router-dom'
const UserEdit = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [gender, setGender] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()
  const { users, handleUpdateUser } = useContext(UserContext)

  useEffect(() => {
    const userToEdit = users.find(user => user.id === id)
    if (userToEdit) {
      setName(userToEdit.name)
      setEmail(userToEdit.email)
      setCountry(userToEdit.country)
      setGender(userToEdit.gender)
    }
  }, [id, users])

  const handleUpdate = () => {
    handleUpdateUser(id, { name, email, country, gender })
    navigate('/users/' + id)
  }

  return (
    <div style={{ border: `2px solid #FFD43B`, borderRadius: `10px`, margin: `20px`, padding: `20px` }}>
      <h2>Editar Usuario</h2>
      <div>
        <label>Nombre: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ingrese el nombre del usuario" />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ingrese el email del usuario" />
      </div>
      <div>
        <label>País: </label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Ingrese el país del usuario" />
      </div>
      <div>
        <label>Género: </label>
        <input
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          placeholder="Ingrese el género del usuario" />
      </div>
      
      <button style={{ margin: `20px`, padding: `20px` }} type="button" onClick={handleUpdate}>Actualizar Usuario</button>
    </div>

  )
}

export default UserEdit