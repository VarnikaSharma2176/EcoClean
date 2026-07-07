const Footer = () => {
  return (
    <footer
      style={{
        marginTop: "auto",
        padding: "25px",
        textAlign: "center",
        background: "#2E7D32",
        color: "#fff",
      }}
    >
      © {new Date().getFullYear()} EcoLoop | E-Waste Collection Management System
    </footer>
  );
};

export default Footer;