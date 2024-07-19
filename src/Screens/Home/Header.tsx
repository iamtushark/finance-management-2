import React from "react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header style={styles.header}>
      <div style={styles.logo}>Fake.Expense.app</div>
      <button style={styles.signInButton} onClick={() => navigate("/login")}>
        Log in
      </button>
    </header>
  );
};
const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    backgroundColor: "#fff",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  signInButton: {
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    borderRadius: "5px",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};

export default Header;
