function Home() {
  return (
    <div style={styles.container}>
      
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Welcome to HMS Hotel</h1>
        <p style={styles.subtitle}>
          Experience comfort, luxury, and seamless booking.
        </p>

        <div style={styles.buttons}>
          <a href="/rooms" style={styles.primaryBtn}>View Rooms</a>
          <a href="/booking" style={styles.secondaryBtn}>Book Now</a>
        </div>
      </section>

      {/* Info Section */}
      <section style={styles.info}>
        <div style={styles.card}>
          <h3>Comfortable Rooms</h3>
          <p>Well-furnished rooms designed for relaxation.</p>
        </div>

        <div style={styles.card}>
          <h3>Easy Booking</h3>
          <p>Book rooms quickly with our simple booking process.</p>
        </div>

        <div style={styles.card}>
          <h3>24/7 Support</h3>
          <p>Our staff is available anytime to assist you.</p>
        </div>
      </section>

    </div>
  );
}

const styles = {
  container: {
    padding: "40px"
  },
  hero: {
    textAlign: "center",
    padding: "80px 20px",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "#fff",
    borderRadius: "10px"
  },
  title: {
    fontSize: "42px",
    marginBottom: "10px"
  },
  subtitle: {
    fontSize: "18px",
    marginBottom: "30px",
    color: "#cbd5e1"
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px"
  },
  primaryBtn: {
    backgroundColor: "#ffffff",
    color: "#0f172a",
    padding: "12px 24px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold"
  },
  secondaryBtn: {
    border: "1px solid #ffffff",
    color: "#ffffff",
    padding: "12px 24px",
    borderRadius: "6px",
    textDecoration: "none"
  },
  info: {
    display: "flex",
    gap: "25px",
    marginTop: "60px",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  card: {
    backgroundColor: "#f8fafc",
    padding: "25px",
    borderRadius: "8px",
    width: "280px",
    textAlign: "center",
    boxShadow: "0 6px 15px rgba(0,0,0,0.08)"
  }
};

export default Home;
