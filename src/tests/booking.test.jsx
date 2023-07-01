import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
  it('validate the date field is required', async () => {
    vi.mocked(fetchAPI).mockReturnValue(['12:00', '13:00', '14:00']);
    render(<Booking />);
    const user = userEvent.setup();

    const chooseTime = screen.getByLabelText('Choose time');
    user.selectOptions(chooseTime, chooseTime.options[0]);

    const chooseGuests = screen.getByLabelText('Number of guests');
    user.type(chooseGuests, '1');

    const occasion = screen.getByLabelText('Occasion');
    user.selectOptions(occasion, occasion.options[0]);

    await user.click(
      screen.getByRole('button', { name: 'Make Your reservation' })
    );

    const error = screen.getByRole('alert');
    expect(error).toHaveTextContent('Required');
  });
  it('validate date must be after today', async () => {
    vi.mocked(fetchAPI).mockReturnValue(['12:00', '13:00', '14:00']);
    render(<Booking />);
    const user = userEvent.setup();

    const chooseDate = screen.getByLabelText('Choose date');
    await user.type(chooseDate, '2021-01-01');

    const chooseTime = screen.getByLabelText('Choose time');
    user.selectOptions(chooseTime, chooseTime.options[0]);

    const chooseGuests = screen.getByLabelText('Number of guests');
    await user.type(chooseGuests, '1');
    expect(chooseGuests).toHaveValue(1);

    const occasion = screen.getByLabelText('Occasion');
    user.selectOptions(occasion, occasion.options[0]);

    await user.click(
      screen.getByRole('button', { name: 'Make Your reservation' })
    );

    const error = screen.getByRole('alert');
    expect(error).toHaveTextContent('Must be after today');
  });
  it('validate number of guests max and min', async () => {
    vi.mocked(fetchAPI).mockReturnValue(['12:00', '13:00', '14:00']);
    render(<Booking />);
    const user = userEvent.setup();

    const chooseDate = screen.getByLabelText('Choose date');
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    await user.type(chooseDate, tomorrow.toISOString().split('T')[0]);

    const chooseTime = screen.getByLabelText('Choose time');
    user.selectOptions(chooseTime, chooseTime.options[0]);

    const chooseGuests = screen.getByLabelText('Number of guests');
    await user.type(chooseGuests, '11');
    await user.click(
      screen.getByRole('button', { name: 'Make Your reservation' })
    );

    expect(chooseGuests).toHaveValue(11);
    expect(screen.getByRole('alert')).toHaveTextContent(
      'Must be 10 or less'
    );

    await user.clear(chooseGuests);
    await user.type(chooseGuests, '0');
    await user.click(
      screen.getByRole('button', {
        name: 'Make Your reservation',
      })
    );

    expect(chooseGuests).toHaveValue(0);
    expect(screen.getByRole('alert')).toHaveTextContent(
      'Must be at least 1'
    );
  });
});
