import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function PatientDashboard() {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("clinic/appointment/")
      .then((res) => setAppointments(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Patient Dashboard</h2>
        <li><Link to="/book-appointment">Book Appointments</Link></li>
      <h3>Your Appointments</h3>

      {appointments.map((a) => (
        <div key={a.id}>
          <p>Doctor: {a.doctor}</p>
          <p>Date: {a.date}</p>
          <p>Time: {a.time}</p>
        </div>
      ))}
    </div>
  );
}

export default PatientDashboard;