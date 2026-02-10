import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, logout } from "../utils/auth";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(isLoggedIn());
  }, []);

  const handleLogout = () => {
    logout();
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h2>HMS</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/booking">Booking</Link>

        {!loggedIn ? (
          <Link to="/login">Login</Link>
        ) : (
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
