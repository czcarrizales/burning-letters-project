import "./CreateLetter.css";
import axios from "axios";
import { useState, useEffect } from "react";

function CreateLetter() {
  const [formValue, setFormValue] = useState({
    message: "",
  });
  const [creatingLetter, setCreatingLetter] = useState(true);
  const [validForm, setValidForm] = useState(true)
  const [formValueLength, setFormValueLength] = useState(0)
  const [validFormLength, setValidFormLength] = useState(true)

  useEffect(() => {
    console.log('checking if valid form')
  }, [validForm])

  useEffect(() => {
    console.log('form value message changed')
    if (formValue.message !== '') {
      setValidForm(true)
    }
    if (formValueLength >= 20) {
      setValidFormLength(true)
    }
  }, [formValue, validFormLength])

  const handleSubmit = async (e) => {
    if (formValue.message == '' || formValue.message == undefined) {
      e.preventDefault()
      setValidForm(false)
      return console.log('cannot be empty')
    }
    if (formValueLength < 20) {
      e.preventDefault()
      setValidFormLength(false)
      return console.log('must be at least 20 characters')
    }
    const formData = new FormData();
    formData.append("message", formValue.message);
    e.preventDefault();
    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "https://burning-letters-api.onrender.com/create",
        data: formData,
        headers: { "Content-Type": "application/json;charset=utf-8" },
      });
      setCreatingLetter(false);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
    setFormValueLength(event.target.value.length)
    console.log(formValue);
    console.log(event.target.value.length)
  };

  const createAnother = () => {
    setFormValue('')
    setCreatingLetter(true)
    console.log(formValue)
  }

  return (
    <div className="create-letter-container">
      <h1>Create Letter</h1>
      {creatingLetter ? (
        <form onSubmit={handleSubmit}>
          <textarea
            type="text"
            name="message"
            placeholder="Write..."
            rows="5"
            minLength={10}
            maxLength={200}
            value={formValue.message}
            onChange={handleChange}
          ></textarea>
          <p className="form-value-length">{formValueLength}/200</p>
          {!validForm && <div className="create-letter-validation">
            <p>Letter cannot be empty.</p>
          </div>}
          {!validFormLength && <div className="create-letter-length-validation">
            <p>Letter must be at least 20 characters long.</p>
          </div>}
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="create-another-container">
          <h2>Letter sent! Create another?</h2>
          <button onClick={createAnother}>Create</button>
        </div>
      )}
    </div>
  );
}

export default CreateLetter;
