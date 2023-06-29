import './chicago.css';
import bruschettaImg from '../assets/bruschetta1.jpg';
import creamImg from '../assets/creme.jpg';

export default function Chicago() {
  return (
    <section className="chicago-section container">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <img src={bruschettaImg} alt="food" />
      <img src={creamImg} alt="food" />
    </section>
  );
}
