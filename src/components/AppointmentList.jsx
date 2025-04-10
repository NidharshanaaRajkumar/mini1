import React from "react";

export default function AppointmentList({ appointments }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Appointments</h2>
      {appointments.length === 0 ? (
        <p className="text-gray-500">No appointments scheduled.</p>
      ) : (
        <ul className="space-y-2">
          {appointments.map((appt, index) => (
            <li key={index} className="p-3 border rounded bg-gray-50">
              <strong>{appt.patient}</strong> - {appt.date} at {appt.time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}