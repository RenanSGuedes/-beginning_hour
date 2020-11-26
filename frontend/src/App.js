import React, { useState } from 'react'
import api from './services/api'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  async function handleAddEntity(e) {
    e.preventDefault()

    const response = await api.post('/users' ,{
      lastName, 
      firstName
    })

    return console.log(response.data)
  }

  return (
    <div className="container">
      <form onSubmit={handleAddEntity}>
        <h2>Register Now!</h2>
        <input  
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          placeholder="Type your first name"
          onChange={e => setFirstName(e.target.value)}
        />
        <input 
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          placeholder="Type your last name"
          onChange={e => setLastName(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
