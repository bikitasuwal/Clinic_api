import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function DoctorDashboard() {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("clinic/appointment/")
      .then((res) => setAppointments(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <h2>Doctor Dashboard</h2>

      <button onClick={handleLogout}>Logout</button>

      <h3>Appointments</h3>

      {appointments.map((a) => (
        <div key={a.id}>
          <p>Patient: {a.patient}</p>
          <p>Date: {a.date}</p>
          <p>Time: {a.time}</p>
        </div>
      ))}
    </div>
  );
}

export default DoctorDashboard;