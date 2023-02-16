import './CreateLetter.css';
import axios from 'axios';
import { useState } from 'react';

function CreateLetter() {
    
    const [formValue, setFormValue] = useState({
        message: ''
    })

    const handleSubmit = async(e) => {
        const formData = new FormData();
        formData.append("message", formValue.message)
        e.preventDefault()
        try {
          // make axios post request
          const response = await axios({
            method: "post",
            url: "http://localhost:5000/create",
            data: formData,
            headers: { 'Content-Type': 'application/json;charset=utf-8' }
          });
          console.log(response.data)
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
            <textarea type='text' name="message" placeholder="Write..." rows="5" maxLength={200} value={formValue.message} onChange={handleChange}></textarea>
            <button type='submit'>Submit</button>
        </form>
    </div>
  );
}

export default CreateLetter;