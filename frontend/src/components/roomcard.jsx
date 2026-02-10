import { useNavigate } from "react-router-dom";

function RoomCard({ room }) {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/booking", {
      state: {
        room_id: room.id,
        room_type: room.type
      }
    });
  };

  return (
    <div style={styles.card}>
      <h3>{room.type}</h3>
      <p>Room No: {room.number}</p>
      <p>Capacity: {room.capacity} Guests</p>
      <p><strong>₹ {room.price} / night</strong></p>

      <button onClick={handleBookNow} style={styles.button}>
        Book Now
      </button>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#ffffff",
    padding: "25px",
    borderRadius: "10px",
    width: "260px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
  },
  button: {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "#0f172a",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

export default RoomCard;
