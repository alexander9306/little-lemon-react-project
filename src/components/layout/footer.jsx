import './footer.css';
import logoImg from '../../assets/logo-small.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <section className="container">
        <img src={logoImg} alt="Little Lemon Logo" />
        <h4>Navigation</h4>
        <menu>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/booking">Reservations</Link>
          </li>
          <li>
            <Link to="/order">Order Online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </menu>
        <h4>Contact</h4>
        <menu>
          <li>
            <span>4th St. Chicago</span>
          </li>
          <li>
            <a href="tel:+1800-555-5555">1-800-555-5555</a>
          </li>
          <li>
            <a href="mailto:abc@littlelemon.com">
              abc@littlelemon.com
            </a>
          </li>
        </menu>
        <h4>Social Media Links</h4>
        <menu>
          <li>
            <a href="facebook.com">Facebook</a>
          </li>
          <li>
            <a href="instagram.com">Instagram</a>
          </li>
        </menu>
      </section>
    </footer>
  );
}
