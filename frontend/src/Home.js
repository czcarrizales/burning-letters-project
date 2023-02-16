import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
 

  return (
    <div className="home-container">
      <h1>Welcome to Burning Letters</h1>
      <p>With this website, you can anonymously create a letter to release whatever is on your mind. Each letter will be displayed for all to see for twenty-four hours, and then it is gone forever.</p>
        <Link to={'/create-letter'}>Create</Link>
      <Link to={'/view-letter'}>
      View
      </Link>
      
    </div>
  );
}

export default Home;
