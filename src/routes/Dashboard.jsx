// routes/Dashboard.js
import React, { useState } from "react";
import AppointmentForm from "../components/AppointmentForm";
import AppointmentList from "../components/AppointmentList";
import VideoCall from "../components/VideoCall";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);
  const [user, setUser] = useState(null);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username && password) {
      setUser({ username });
    } else {
      alert("Please enter valid credentials.");
    }
  };

  if (!user) {
    return (
      <div className="login-container">
        <form onSubmit={handleLogin} className="login-form">
          <h2 className="login-title">Login</h2>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="login-input"
          /><br /><br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="login-input"
          /><br /><br />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <Navbar user={user} onLogout={() => setUser(null)} />
      <div className="dashboard-content">
        <h1 className="dashboard-title">Welcome, {user.username}</h1>
      </div>
      <div className="dashboard-grid">
        <AppointmentForm onAdd={addAppointment} />
        <AppointmentList appointments={appointments} />
      </div>
      <div className="video-call-section">
        <VideoCall />
      </div>
    </div>
  );
}
