import './App.css';
import Navbar from './Navbar'
import axios from 'axios'
import { useState, useEffect } from 'react';
import CreateLetter from './CreateLetter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewLetter from './ViewLetter';

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
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/view-letter' element={<ViewLetter/>} />
      <Route path='/create-letter' element={<CreateLetter/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
