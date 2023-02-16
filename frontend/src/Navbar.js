import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='nav'>
      Burning Letters
      <Link to={'/create-letter'}>Create</Link>
      <Link to={'/view-letter'}>View</Link>
    </div>
  );
}

export default Navbar;