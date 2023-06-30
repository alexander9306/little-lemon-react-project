import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Booking from '../routes/booking';
import { fetchAPI } from '../utils/booking-api';

const mocks = vi.hoisted(() => {
  return {
    fetchAPI: vi.fn(),
  };
});

vi.mock('../utils/booking-api', () => {
  return {
    fetchAPI: mocks.fetchAPI,
  };
});

describe('Booking Page', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('choose date label exists', () => {
    vi.mocked(fetchAPI).mockReturnValue(['12:00', '13:00', '14:00']);
    render(<Booking />);
    const label = screen.getByText('Choose date');
    expect(label).toBeInTheDocument();
  });
  it('available times options exist', () => {
    vi.mocked(fetchAPI).mockReturnValue(['12:00', '13:00', '14:00']);

    render(<Booking />);
    const selectElement = screen.getByLabelText('Choose time');

    const optionElements = selectElement.options;
    expect(optionElements).toHaveLength(3);
  });
});
