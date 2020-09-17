import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <>
            <form className='login-form'>
                <div className='login-form-item'>
                    <label className='login-label' htmlFor='userName'>Usuário</label>
                    <input className='login-input' id='userName'></input>
                </div>
                <div className='login-form-item'>
                    <label className='login-label' htmlFor='password'>Senha</label>
                    <input type='password' className='login-input' id='password'></input>
                </div>
                <button className='login-button'>Logar</button>
            </form>
        </>
    )
}

export default Login;