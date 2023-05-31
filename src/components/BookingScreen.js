import React, { useState } from 'react';
import '../styles/BookingScreen.css'; // Import the CSS file for styling

const BookingScreen = () => {
  const [name, setName] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [phone, setPhone] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (!name || !selectedDate || !selectedTime || !serviceType || !phone) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    // Process the booking
    // TODO: Implement your booking logic here

    // Clear the form and display success message
    setName('');
    setSelectedDate('');
    setSelectedTime('');
    setServiceType('');
    setAdditionalDetails('');
    setErrorMessage('');
    setPhone('');
    alert('Booking submitted successfully!');
  };

  return (
    <div className="booking-screen-container">
      <h2>Booking Form</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Phone Number:</label>
          <input
            type="tel"
            pattern="[0-9 ]*"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="service-type">Service Type:</label>
          <select
            id="service-type"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="form-input"
          >
            <option value="">Select Service Type</option>
            <option value="repairs">Repairs</option>
            <option value="maintenance">Maintenance</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="additional-details">Additional Details:</label>
          <textarea
            id="additional-details"
            value={additionalDetails}
            onChange={(e) => setAdditionalDetails(e.target.value)}
            className="form-input"
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Book Now</button>
      </form>
    </div>
  );
};

export default BookingScreen;
