import { useReducer } from 'react';
import { redirect } from 'react-router-dom';
import BookingForm from '../components/booking-form';
import { fetchAPI, submitAPI } from '../utils/booking-api';

export default function Booking() {
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
      redirect('/success');
    } else {
      alert('error');
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
