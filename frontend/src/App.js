import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.svg';
import api from './services/api';


function App() {
  const [email, setEmail] = useState('');


  async function handleSubmit(event) {
    event.preventDefault();
    
    const response = await api.post("sessions", { email })
    
    const { id } = response.data;

    localStorage.setItem("user", id);

  }


  return (
    <div className="container">
      <img src={logo} alt="AirCnC"/>
      <div className="content">
        <p> 
          Lugares para programadores e talentos.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail*</label>
          <input 
            type="email" 
            id="email"
            required
            placeholder="Digite seu e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)} />
            
            <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
