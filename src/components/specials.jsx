import './specials.css';
import bruchettaImg from '../assets/bruschetta1.jpg';
import lemonDessertImg from '../assets/lemon.jpg';
import greekSaladImg from '../assets/cat-csalad.jpg';

function DeliveryIcon() {
  return (
    <svg
      width="17"
      height="11"
      viewBox="0 0 17 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.456 1.72713C14.456 0.8993 13.7058 0.221985 12.7889 0.221985H10.2881V1.72713H12.7889V3.72145L9.88793 6.99513H6.95367V3.23227H3.61928C1.77703 3.23227 0.284889 4.57938 0.284889 6.24256V8.50028H1.95208C1.95208 9.74955 3.06911 10.758 4.45288 10.758C5.83665 10.758 6.95367 9.74955 6.95367 8.50028H10.6882L14.456 4.24825V1.72713ZM4.45288 9.25285C3.9944 9.25285 3.61928 8.91419 3.61928 8.50028H5.28647C5.28647 8.91419 4.91136 9.25285 4.45288 9.25285Z"
        fill="black"
      />
      <path
        d="M6.95367 0.974548H2.78568V2.47968H6.95367V0.974548Z"
        fill="black"
      />
      <path
        d="M14.456 6.24255C13.0723 6.24255 11.9552 7.251 11.9552 8.50026C11.9552 9.74952 13.0723 10.758 14.456 10.758C15.8398 10.758 16.9568 9.74952 16.9568 8.50026C16.9568 7.251 15.8398 6.24255 14.456 6.24255ZM14.456 9.25283C13.9976 9.25283 13.6224 8.91417 13.6224 8.50026C13.6224 8.08635 13.9976 7.74769 14.456 7.74769C14.9145 7.74769 15.2896 8.08635 15.2896 8.50026C15.2896 8.91417 14.9145 9.25283 14.456 9.25283Z"
        fill="black"
      />
    </svg>
  );
}

function Card({ image, title, price, description }) {
  return (
    <article>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <span>{price}</span>
        <p>{description}</p>

        <button className="primary">
          Order a delivery <DeliveryIcon />
        </button>
      </div>
    </article>
  );
}

export default function Specials() {
  const specials = [
    {
      image: greekSaladImg,
      title: 'Greek Salad',
      price: '$12.99',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: bruchettaImg,
      title: 'Bruchetta',
      price: '$12.99',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: lemonDessertImg,
      title: 'Lemon Dessert',
      price: '$12.99',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <section className="specials-section container">
      <h2>Specials</h2>
      <button className="primary">Online Menu</button>
      {specials.map((special) => (
        <Card {...special} key={special.title} />
      ))}
    </section>
  );
}
