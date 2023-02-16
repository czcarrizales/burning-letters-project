import axios from "axios";
import { useState, useEffect } from "react";
import "./ViewLetter.css";

function ViewLetter() {

  const [letter, setLetter] = useState("no message");

  useEffect(() => {
    getMessage();
    console.log("effect");
  }, []);

  function getMessage() {
    axios
      .get("http://localhost:5000")
      .then((response) => {
        const randomMessage =
          response.data[Math.floor(Math.random() * response.data.length)]
            .message;
        setLetter(randomMessage);
        console.log("message recieved!");
      })
      .catch(console.log("OH NOOOOOO"));
  }

  return (
    <div className="view-letter-container">
        {letter}
        <button onClick={getMessage}>View New Letter</button>
        </div>
  );
}

export default ViewLetter;
