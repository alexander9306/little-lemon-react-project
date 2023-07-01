import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../components/booking-form';
import { fetchAPI, submitAPI } from '../utils/booking-api';

export default function Booking() {
  const navigate = useNavigate();

  function updateTimes(state, action) {
    if (action.type === 'change_date') {
      return {
        availableTimes: fetchAPI(new Date(action.payload)),
      };
    }
  }

  function initializeTimes() {
    return { availableTimes: fetchAPI(new Date()) };
  }

  function submitForm(formData) {
    const res = submitAPI(formData);

    if (res) {
      navigate('/success');
    } else {
      alert('There is a reservation already for this date and time.');
    }
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
        onSubmit={submitForm}
      />
    </>
  );
}
