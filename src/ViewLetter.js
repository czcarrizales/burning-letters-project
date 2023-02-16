import axios from "axios";
import { useState, useEffect } from "react";
import "./ViewLetter.css";

function ViewLetter() {
  const [letter, setLetter] = useState("no message");
  const [letterIndex, setLetterIndex] = useState();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMessage();
    console.log("effect");
  }, []);

  function randomNumber(length) {
    return Math.floor(Math.random() * length);
  }

  function getMessage() {
    setLoading(true)
    axios
      .get("http://localhost:5000")
      .then((response) => {
        const index = randomNumber(response.data.length);
        console.log(index)
        console.log(letterIndex)
        if (index !== letterIndex) {
          console.log("it is not the same");
          setLetterIndex(index);
          const randomMessage = response.data[letterIndex].message;
          setLetter(randomMessage);
          setLoading(false)
        } else {
            getMessage()
        }
      })
      .catch(console.log("OH NOOOOOO"));
  }

  return (
    <div className="view-letter-container">
      <p>{loading ? 'loading...' : letter}</p>
      <button onClick={getMessage}>View New Letter</button>
    </div>
  );
}

export default ViewLetter;
