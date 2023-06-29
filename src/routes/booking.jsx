import { useReducer } from 'react';
import BookingForm from '../components/booking-form';

export default function Booking() {
  function updateTimes(state, action) {
    if (action.type === 'change_date') {
      return {
        availableTimes: state.availableTimes,
      };
    }
  }
  const availableTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];

  function initializeTimes() {
    return { availableTimes };
  }

  const [state, dispatch] = useReducer(
    updateTimes,
    initializeTimes()
  );

  return (
    <>
      <BookingForm
        availableTimes={state.availableTimes}
        onDateChange={dispatch}
      />
    </>
  );
}
