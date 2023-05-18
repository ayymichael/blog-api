import React, { useState, useEffect } from 'react';
import Modal from './Modal.js'

function Header(props) {
  const [modalActive, setModalActive] = useState(false)

  const [authed, setAuthed] = useState(false)


  useEffect(() => {
    if (localStorage.getItem('token')) {
      setAuthed(true)

    }
  }, [authed])

  const logout = () => {
    setAuthed(!authed)
    localStorage.removeItem('token')
    localStorage.removeItem('id')
  }

  const handleClick = () => {
    setModalActive(!modalActive)
  }



  return (
    <header>
      <div className="leftSide">
        <img src="./img/social-media.png" alt="logo"></img>
        <div className="headerInfo">
          <h3>hold in line </h3>
          <p>Последние посты</p>
        </div>
      </div>
      <div className="rightSide">
        {authed ?
          
          <p style={{ 'cursor': 'pointer' }} onClick={logout}>
            Выйти
            {props.authChange(authed)}
          </p>
          :
          <ul className='d-flex'>
            <p style={{ 'cursor': 'pointer' }} onClick={handleClick}>
              Войти
            </p>
            <p style={{ 'cursor': 'pointer' }} onClick={handleClick}>
              Зарегистрироваться
            </p>
          </ul>
        }

      </div>
      <Modal active={modalActive} clickHaldler={handleClick} registrationCheck={true} auth={setAuthed}>
      </Modal>
    </header>
  )
}

export default Header