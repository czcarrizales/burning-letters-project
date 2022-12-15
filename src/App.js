import './App.css';
import Navbar from './Navbar'
import axios from 'axios'
import { useState, useEffect } from 'react';
import CreateLetter from './CreateLetter';

function App() {

  const [letter, setLetter] = useState('no message')

  useEffect(() => {
    getMessage()
    console.log('effect')
  }, [])

  function getMessage() {
    axios.get('http://localhost:5000')
      .then((response) => {
        const randomMessage = response.data[Math.floor(Math.random() * response.data.length)].message
        setLetter(randomMessage)
        console.log('message recieved!')
        
      })
      .catch(console.log('OH NOOOOOO'))
  }

  return (
    <div className="App">
      <Navbar />
      <div className='letter-container'>
        {letter}
        <button onClick={getMessage}>See New Letter</button>
      </div>
      <CreateLetter />
    </div>
  );
}

export default App;
