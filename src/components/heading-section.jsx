import './heading-section.css';
import gourmetImage from '../assets/gourmet.jpg';

export default function HeadingSection() {
  return (
    <section className="heading-section">
      <div className="container">
        <article>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>

          <button className="primary">Reserve a Table</button>
        </article>
        <article>
          <img src={gourmetImage} alt="food" />
        </article>
      </div>
    </section>
  );
}
