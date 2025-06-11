import React,{useEffect, useState, useContext} from 'react'
import { UserContext } from '../context/UserContext'

const UserForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [gender, setGender] = useState('')

    const {handleCreateUser} = useContext(UserContext)

    const hundleSubmit = () => {
      const newUser = {
        name: name,
        email: email,
        country: country,
        gender: gender
      }
      handleCreateUser(newUser)
      setName('')
      setEmail('')
      setCountry('')
      setGender('')

    }

  return (
    <div style={{ border: `2px solid #FFD43B`, borderRadius: `10px`, margin: `20px`, padding: `20px` }}>
      <h2>Agregar Usuario</h2>
      <div>
        <label>Nombre: </label>
        <input type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ingrese el nombre del usuario" /> 
      </div>
      <div>
        <label>Email: </label>
        <input type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Ingrese el email del usuario" />
      </div>
      <div>
        <label>País: </label>
        <input type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder="Ingrese el país del usuario" />
      </div>
      <div>
        <label>Género: </label>
        <input type="text"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        placeholder='Ingrese el género del usuario'/>
      </div>
      <button onClick={hundleSubmit}>Crear Usuario</button>
    </div>
  )
}

export default UserForm