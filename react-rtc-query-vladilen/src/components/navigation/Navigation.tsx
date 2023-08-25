import { Link } from 'react-router-dom';
import './navigation.scss';

export const Navigation = () => {
  return (
    <nav>
      <div className="max-w-[560px] mx-auto">
        <h3>GitHub Search</h3>

        <span>
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </span>
      </div>
    </nav>
  );
};
