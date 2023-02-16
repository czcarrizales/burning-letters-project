import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='nav'>
      <NavLink to={'/'}>Burning Letters</NavLink>
      <NavLink to={'/create-letter'}>Create</NavLink>
      <NavLink to={'/view-letter'}>View</NavLink>
    </div>
  );
}

export default Navbar;