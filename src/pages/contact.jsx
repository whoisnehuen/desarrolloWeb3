import React from 'react'

const Contact = () => {
  return (
    <div>
      <h2>Contacto</h2>
      <img src="src\assets\chat.png" alt="perfil" style={{ width: '150px'}} />
        <ul>
          <li><a href="https://github.com/whoisnehuen">GitHub   </a><img src='src\assets\github.png' alt="github" style={{ width: '35px'}}/></li>
          <li><a href="mailto:lautarito222jara@gmail.com?Subject=Desafio%20desarrollo%20web%203">e-mail   </a><img src='src\assets\mail.png' alt="mail" style={{ width: '35px'}}/></li>
          <li><a href="https://www.instagram.com/espinaca8_/">Instagram   </a><img src='src\assets\instagram.png' alt="instagram" style={{ width: '35px'}}/></li>
        </ul>
    </div>
  )
}

export default Contact
