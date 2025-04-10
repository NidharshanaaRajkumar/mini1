// routes/LandingPage.js
import React from "react";
import { Link } from "react-router-dom";

// Example local or online doctor images
import doctor1 from "../assets/doctor1.png";
import doctor2 from "../assets/doctor2.png";
import doctor3 from "../assets/doctor3.png";
import doctor4 from "../assets/doctor4.png";

const doctors = [
  {
    name: "Dr. Sarah Thompson",
    specialty: "Cardiologist",
    experience: "15+ years of experience",
    image: doctor1,
  },
  {
    name: "Dr. James Patel",
    specialty: "Dermatologist",
    experience: "10+ years of experience",
    image: doctor2,
  },
  {
    name: "Dr. Emily Nguyen",
    specialty: "Pediatrician",
    experience: "8+ years of experience",
    image: doctor3,
  },
  {
    name: "Dr.Aparna ravichandran",
    specialty: "Orthopedic",
    experience: "5+ years of experience",
    image: doctor4,
  },
];

export default function LandingPage() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Telemedicine</h1>
      <p className="home-subtitle">Book an appointment with a doctor online.</p>

      <div className="doctors-grid">
        {doctors.map((doc, index) => (
          <div className="doctor-card" key={index}>
            <img src={doc.image} alt={doc.name} className="doctor-image" />
            <div className="doctor-info">
              <h2 className="doctor-name">{doc.name}</h2>
              <p className="doctor-specialty">{doc.specialty}</p>
              <p className="doctor-experience">{doc.experience}</p>
            </div>
          </div>
        ))}
      </div>

      <Link to="/dashboard" className="home-button">Login Page</Link>
    </div>
  );
}
