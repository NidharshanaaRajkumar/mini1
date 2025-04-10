import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LogOut, Home, LayoutDashboard } from "lucide-react";
// Make sure to import your CSS file

export default function Navbar({ user, onLogout }) {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        🩺 TeleDoc
      </Link>
      <div className="navbar-links">
        <Link
          to="/dashboard"
          className={`navbar-link ${
            location.pathname === "/dashboard" ? "active" : ""
          }`}
        >
          <LayoutDashboard size={18} /> Dashboard
        </Link>
        {user && (
          <button className="logout-button" onClick={onLogout}>
            <LogOut size={16} /> Logout<br></br>
          </button>
        )}
      </div>
    </nav>
  );
}
