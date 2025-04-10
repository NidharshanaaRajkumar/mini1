import React, { useState } from "react";

export default function AppointmentForm({ onAdd }) {
  const [formData, setFormData] = useState({
    patient: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.patient && formData.date && formData.time) {
      onAdd(formData);
      setFormData({ patient: "", date: "", time: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="appointment-form">
      <h2 className="form-title">Book Appointment</h2>
      <input
        type="text"
        name="patient"
        placeholder="Patient Name"
        value={formData.patient}
        onChange={handleChange}
        className="form-input"
      /><br></br>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="form-input"
      /><br></br>
      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        className="form-input"
      /><br></br>
      <button type="submit" className="submit-button">
        Add Appointment
      </button>
    </form>
  );
}
