import './nav.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function Nav({ isMobileOpen, onCloseClick }) {
  return (
    <nav className={`header-nav ${isMobileOpen && 'open'}`}>
      <div className="logo">
        <img src={logo} alt="logo" />
        <div onClick={onCloseClick}>
          <AiOutlineCloseCircle />
        </div>
      </div>
      <menu>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/booking">Reservations</NavLink>
        </li>
        <li>
          <NavLink to="/order">Order online</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </menu>
    </nav>
  );
}
