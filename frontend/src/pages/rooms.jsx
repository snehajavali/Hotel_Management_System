import { useEffect, useState } from "react";
import RoomCard from "../components/roomcard";
import { getAvailableRooms } from "../services/roomService";

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const data = await getAvailableRooms();
      setRooms(data);
    } catch (err) {
      setError("Failed to load rooms. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p style={{ padding: "40px" }}>Loading rooms...</p>;
  }

  if (error) {
    return <p style={{ padding: "40px", color: "red" }}>{error}</p>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h2>Available Rooms</h2>

      <div style={styles.grid}>
        {rooms.map(room => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: "flex",
    gap: "25px",
    flexWrap: "wrap",
    marginTop: "25px"
  }
};

export default Rooms;
