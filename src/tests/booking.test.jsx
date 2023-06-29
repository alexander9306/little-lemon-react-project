import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';
import Booking from '../routes/booking';

describe('Booking Page', () => {
  const availableTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];

  it('choose date label exists', () => {
    render(<Booking />);
    const label = screen.getByText('Choose date');
    expect(label).toBeInTheDocument();
  });
  it('available times options exist', () => {
    render(<Booking />);
    const selectElement = screen.getByLabelText('Choose time');

    const optionElements = Array.from(selectElement.options).map(
      (option) => option.value
    );
    expect(optionElements).toHaveLength(6);
    expect(optionElements).toEqual(
      expect.arrayContaining(availableTimes)
    );
  });
});
