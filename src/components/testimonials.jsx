import './testimonials.css';

function Stars({ rating = 0 }) {
  return (
    <>
      {Array.from({ length: rating }).map((_, i) => (
        <svg
          key={i}
          width="17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.5 0L10.36 5.64H16.64L11.82 8.66L13.68 14.3L8.5 11.27L3.32 14.3L5.18 8.66L0.36 5.64H6.64L8.5 0Z"
            fill="#FFD700"
          />
        </svg>
      ))}

      {Array.from({ length: 5 - rating }).map((_, i) => (
        <svg
          key={i}
          width="17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.5 0L10.36 5.64H16.64L11.82 8.66L13.68 14.3L8.5 11.27L3.32 14.3L5.18 8.66L0.36 5.64H6.64L8.5 0Z"
            fill="#E5E5E5"
          />
        </svg>
      ))}
    </>
  );
}

function TestimonialCard({ image, name, comment, rating = 0 }) {
  return (
    <article>
      <div className="stars">
        <Stars rating={rating} />
      </div>
      <img src={image} alt={`${name} picture`} />
      <h3>{name}</h3>
      <p> {comment}</p>
    </article>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      name: 'John Doe',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/100',
      rating: 5,
    },
    {
      name: 'Jane Doe',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/100',
      rating: 4,
    },
    {
      name: 'John Smith',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/100',
      rating: 4,
    },
    {
      name: 'Jane Smith',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/100',
      rating: 5,
    },
    {
      name: 'John Davis',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/100',
      rating: 5,
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>Testimonials</h2>
        <div>
          {testimonials.map((testimonial) => (
            <TestimonialCard
              {...testimonial}
              key={testimonial.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
