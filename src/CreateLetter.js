import './CreateLetter.css';
import axios from 'axios';
import { useState } from 'react';

function CreateLetter() {
    
    const [formValue, setFormValue] = useState({
        message: ''
    })

    const handleSubmit = async(e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("message", formValue.message)
      
        try {
          // make axios post request
          const response = await axios({
            method: "post",
            url: "http://localhost:5000/create",
            data: formData
          });
          console.log(response)
        } catch(error) {
          console.log(error)
        }
      }

    const handleChange = (event) => {
        setFormValue({...formValue, [event.target.name]: event.target.value})
        console.log(formValue)
    }


  
    return (
    <div className='create-letter-container'>
        <h1>Create Letter</h1>
        <form onSubmit={handleSubmit}>
            <textarea type='text' name="message" placeholder="enter message" rows="5" value={formValue.message} onChange={handleChange}></textarea>
            <button type='submit'>Submit</button>
        </form>
    </div>
  );
}

export default CreateLetter;