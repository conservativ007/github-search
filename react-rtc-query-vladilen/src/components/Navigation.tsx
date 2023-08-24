import { Link } from 'react-router-dom';
import './navigation.scss';

export const Navigation = () => {
  return (
    <nav>
      <h3>GitHub Search</h3>

      <span>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </span>
    </nav>
  );
};
