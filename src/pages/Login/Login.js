import React, { useState } from 'react';
import LoginClient from '../../api/login/loginClient';
import './Login.css';

const Login = () => {

    const [logged, setState] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const { userName, password } = event.target.elements;
    
        const result = LoginClient.post(userName.value, password.value);
        setState(result);
    }
    
    return (
      <div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form-item">
            <label className="login-label" htmlFor="userName">
              Usuário
            </label>
            <input className="login-input" id="userName"></input>
          </div>
          <div className="login-form-item">
            <label className="login-label" htmlFor="password">
              Senha
            </label>
            <input
              type="password"
              className="login-input"
              id="password"
            ></input>
          </div>
          <button className="login-button">
            Logar
          </button>
        </form>
        <label>
          {logged ? "Logado com sucesso" : "Usuário ou senha incorreto"}
        </label>
      </div>
    );
}

export default Login;