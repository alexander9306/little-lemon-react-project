import { useState } from 'react';
import './header.css';
import logo from '../../assets/logo.jpg';
import Nav from './nav';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen((v) => !v);

  return (
    <header className="container">
      <div
        className={isNavOpen ? 'hidden' : ''}
        onClick={toggleNav}
      />
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />{' '}
        </Link>
      </div>
      <Nav isMobileOpen={isNavOpen} onCloseClick={toggleNav} />
      <div className="hamburger">
        <div onClick={toggleNav}>
          <AiOutlineMenu />
        </div>
      </div>
    </header>
  );
}
