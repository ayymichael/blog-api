import { useState } from 'react';
import './modal.css'
import axios from './axios'

function Modal(props) {
    const [inputOne, setInputOne] = useState('');
    const [inputTwo, setInputTwo] = useState('');
    const [errormsg, setErrormsg] = useState('');

    const login = () => {
        axios.post('http://localhost:5000/auth/login', {
            email: inputOne,
            password: inputTwo
        })
            .then((resp) => {
                localStorage.setItem("token", resp.data.token);
                localStorage.setItem("id", resp.data._id);
                props.auth(true)
                props.clickHaldler()
            })
            .catch((err) => {
                try {
                    setErrormsg(err.response.data['0'].msg)
                } catch (e) {
                    setErrormsg(err.response.data.message)
                }
            })
    }

    const register = () => {
        axios.post('http://localhost:5000/auth/register', {
            email: inputOne,
            password: inputTwo
        })
            .then((resp) => {
                localStorage.setItem("token", resp.data.token);
                localStorage.setItem("id", resp.data._id);
                props.auth(true)
                props.clickHaldler()
            })
            .catch((err) => {
                try {
                    setErrormsg(err.response.data['0'].msg)
                } catch (e) {
                    setErrormsg(err.response.data.message)
                }
            })
    }

    return (
        <div className={props.active ? "modal active" : "modal"} onClick={props.clickHaldler}>
            <div className={props.active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                {props.registrationCheck ?
                    <div className='d-flex f-col'>
                        <input placeholder='Введите почту' onChange={(event) => setInputOne(event.target.value)}></input>
                        <input placeholder='Введите пароль' onChange={(event) => setInputTwo(event.target.value)} ></input>
                        {errormsg && <b>{errormsg}</b>}
                        <button onClick={login}>Войти</button>
                    </div>
                    :
                    <div className='d-flex f-col'>
                        <input placeholder='Введите почту' onChange={(event) => setInputOne(event.target.value)}></input>
                        <input placeholder='Введите пароль' onChange={(event) => setInputTwo(event.target.value)}></input>
                        <button onClick={register}>Зарегистрироваться</button>
                    </div>}
            </div>
        </div>
    )
}

export default Modal