import { useState } from 'react';
import './booking-form.css';

export default function BookingForm({
  availableTimes,
  onDateChange,
  onSubmit,
}) {
  const [state, setState] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(state);
  }

  function handleChange(event) {
    const { id, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));

    if (id === 'date') {
      onDateChange({ type: 'change_date', payload: value });
    }
  }

  return (
    <section className="container booking-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Choose date</label>
        <input
          type="date"
          id="date"
          value={state.date}
          onChange={handleChange}
          aria-label="Choose date"
          aria-describedby="date-description"
        />

        <label htmlFor="time">Choose time</label>
        <select
          id="time"
          value={state.time}
          onChange={handleChange}
          aria-label="Choose time"
          aria-describedby="time-description"
        >
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={state.guests}
          onChange={handleChange}
          aria-label="Number of guests"
          aria-describedby="guests-description"
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={state.occasion}
          onChange={handleChange}
          aria-label="Occasion"
          aria-describedby="occasion-description"
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <input
          type="submit"
          value="Make Your reservation"
          aria-label="Make Your reservation"
        />
      </form>
    </section>
  );
}
