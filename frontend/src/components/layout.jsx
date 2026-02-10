import Navbar from "./navbar";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div style={styles.wrapper}>
      <Navbar />
      <main style={styles.content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  content: {
    padding: "40px"
  }
};

export default Layout;
