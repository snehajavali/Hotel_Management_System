import { useState } from "react";
import { useLocation } from "react-router-dom";
import { createBooking } from "../services/bookingService";

function Booking() {
  const location = useLocation();
  const selectedRoom = location.state;

  const [form, setForm] = useState({
    room_id: selectedRoom?.room_id || 1,
    check_in: "",
    check_out: "",
    guests: 1
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createBooking(form);
      alert(res.message);
    } catch (err) {
      alert("Booking failed. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        Book {selectedRoom?.room_type || "Room"}
      </h2>

      <form onSubmit={handleSubmit} style={styles.form}>

        <div style={styles.field}>
          <label>Check-in Date</label>
          <input
            type="date"
            name="check_in"
            value={form.check_in}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.field}>
          <label>Check-out Date</label>
          <input
            type="date"
            name="check_out"
            value={form.check_out}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.field}>
          <label>Number of Guests</label>
          <input
            type="number"
            name="guests"
            min="1"
            value={form.guests}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" style={styles.button}>
          Confirm Booking
        </button>

      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "420px",
    margin: "60px auto",
    padding: "30px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
  },
  title: {
    textAlign: "center",
    marginBottom: "20px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px"
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "6px"
  },
  button: {
    marginTop: "10px",
    padding: "12px",
    backgroundColor: "#0f172a",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px"
  }
};

export default Booking;
