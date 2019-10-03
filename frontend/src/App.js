import React from 'react';
import './App.css';
import logo from './assets/logo.svg';


function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnC"/>
      <div className="content">
        <p>
          Lugares para programadores e talentos.
        </p>

        <form action="">
          <label htmlFor="email">E-mail*</label>
          <input 
            type="email" 
            id="email"
            placeholder="Digite seu e-mail"
          />
            <button type="button">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
