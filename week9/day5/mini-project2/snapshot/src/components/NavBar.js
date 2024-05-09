import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to="/gallery/mountain">Mountain</Link>
      <Link to="/gallery/beach">Beach</Link>
      <Link to="/gallery/bird">Bird</Link>
      <Link to="/gallery/food">Food</Link>
    </nav>
  );
}

export default NavBar;
