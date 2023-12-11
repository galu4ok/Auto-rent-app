import logo from '../../../src/logo.svg';
import '../../../src/App.css';
import { SectionContainer } from '../../GlobalStyle';
import { SiteHeader, NavList, Navigation } from './Header.styled';

export const Header = () => {
  return (
    <SectionContainer>
      <SiteHeader>
        <nav>
          <Navigation to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Navigation>

          <NavList>
            <li>
              <Navigation to="/">Home</Navigation>
            </li>
            <li>
              <Navigation to="/catalog">Catalog</Navigation>
            </li>
            <li>
              <Navigation to="/favorites">Favorites</Navigation>
            </li>
          </NavList>
        </nav>
      </SiteHeader>
    </SectionContainer>
  );
};
