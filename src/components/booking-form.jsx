import { useFormik } from 'formik';
import * as Yup from 'yup';
import './booking-form.css';

export default function BookingForm({
  availableTimes,
  onDateChange,
  onSubmit,
}) {
  const formik = useFormik({
    initialValues: {
      date: '',
      time: '',
      guests: '',
      occasion: '',
    },
    validationSchema: Yup.object({
      date: Yup.date()
        .min(new Date(), 'Must be after today')
        .required('Required'),
      time: Yup.string().required('Required'),
      guests: Yup.number()
        .min(1, 'Must be at least 1')
        .max(10, 'Must be 10 or less')
        .required('Required'),
      occasion: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  function handleDateChange(e) {
    formik.setFieldValue('date', e.target.value);
    onDateChange({ type: 'change_date', payload: e.target.value });
  }

  return (
    <section className="container booking-form">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="date">Choose date</label>
        <input
          type="date"
          id="date"
          aria-label="Choose date"
          aria-describedby="date-description"
          {...formik.getFieldProps('date')}
          onChange={handleDateChange}
        />
        {formik.touched.date && formik.errors.date ? (
          <div role="alert" id="date-error" className="error">
            {formik.errors.date}
          </div>
        ) : null}

        <label htmlFor="time">Choose time</label>
        <select
          id="time"
          aria-label="Choose time"
          aria-describedby="time-description"
          {...formik.getFieldProps('time')}
        >
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        {formik.touched.time && formik.errors.time ? (
          <div role="alert" id="time-error" className="error">
            {formik.errors.time}
          </div>
        ) : null}

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          aria-label="Number of guests"
          aria-describedby="guests-description"
          {...formik.getFieldProps('guests')}
        />
        {formik.touched.guests && formik.errors.guests ? (
          <div role="alert" id="guests-error" className="error">
            {formik.errors.guests}
          </div>
        ) : null}

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          aria-label="Occasion"
          aria-describedby="occasion-description"
          {...formik.getFieldProps('occasion')}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {formik.touched.occasion && formik.errors.occasion ? (
          <div role="alert" id="occasion-error" className="error">
            {formik.errors.occasion}
          </div>
        ) : null}

        <button
          type="submit"
          aria-label="Make Your reservation"
          disabled={!formik.isValid}
          className="primary"
        >
          Make Your reservation
        </button>
      </form>
    </section>
  );
}
