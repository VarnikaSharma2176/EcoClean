import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 8%",
        background: "#ffffff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <Link
        to="/"
        style={{
          fontSize: "1.8rem",
          fontWeight: "700",
          color: "#2E7D32",
        }}
      >
        EcoLoop
      </Link>

      <div
        style={{
          display: "flex",
          gap: "25px",
          alignItems: "center",
        }}
      >
        <Link to="/">Home</Link>

        <Link to="/knowledge">Knowledge Hub</Link>

        <Link to="/login">Login</Link>

        <Link
          to="/register"
          style={{
            background: "#2E7D32",
            color: "#fff",
            padding: "10px 18px",
            borderRadius: "8px",
          }}
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;