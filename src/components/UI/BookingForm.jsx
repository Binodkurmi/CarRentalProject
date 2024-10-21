import React, { useState } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup, Button } from "reactstrap";
import axios from "axios";  // Import axios

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    fromAddress: "",
    toAddress: "",
    numberOfPeople: "1 person",
    numberOfLuggage: "0 luggage",
    journeyDate: "",
    journeyTime: "",
    comments: "",
  });

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      // Make the API call to submit the booking data
      const response = await axios.post('http://localhost:5000/api/bookings', formData);  // Update URL to your backend endpoint
      console.log('Booking response:', response.data);
      alert("Booking submitted successfully!");
    } catch (error) {
      console.error('Error creating booking:', error);
      alert("Error submitting booking. Please try again.");
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="text"
          name="fromAddress"
          placeholder="From Address"
          value={formData.fromAddress}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="text"
          name="toAddress"
          placeholder="To Address"
          value={formData.toAddress}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select
          name="numberOfPeople"
          value={formData.numberOfPeople}
          onChange={handleChange}
        >
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5+ person">5+ Person</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select
          name="numberOfLuggage"
          value={formData.numberOfLuggage}
          onChange={handleChange}
        >
          <option value="0 luggage">0 luggage</option>
          <option value="1 luggage">1 luggage</option>
          <option value="2 luggage">2 luggage</option>
          <option value="3 luggage">3 luggage</option>
          <option value="4 luggage">4 luggage</option>
          <option value="5+ luggage">5+ luggage</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="date"
          name="journeyDate"
          value={formData.journeyDate}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          name="journeyTime"
          value={formData.journeyTime}
          onChange={handleChange}
          className="time__picker"
          required
        />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          name="comments"
          className="textarea"
          placeholder="Write"
          value={formData.comments}
          onChange={handleChange}
        ></textarea>
      </FormGroup>

      <Button type="submit" color="primary">Submit Booking</Button>
    </Form>
  );
};

export default BookingForm;
