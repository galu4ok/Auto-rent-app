import logo from '../../../src/logo.svg';
import '../../../src/App.css';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div>
        <nav>
          <NavLink to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </NavLink>

          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/catalog">Catalog</NavLink>
            </li>
            <li>
              <NavLink to="/favorites">Favorites</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
