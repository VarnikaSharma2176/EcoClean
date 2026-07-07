import hero from "../../assets/hero.png";

const LandingPage = () => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "80px 8%",
        gap: "50px",
      }}
    >
      <div style={{ flex: 1 }}>
        <h1
          style={{
            fontSize: "3.2rem",
            marginBottom: "20px",
            color: "#2E7D32",
          }}
        >
          Dispose E-Waste Responsibly.
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            marginBottom: "30px",
          }}
        >
          Schedule e-waste pickups, contribute to a cleaner environment, and
          earn reward points with EcoLoop.
        </p>

        <button
          style={{
            padding: "14px 28px",
            border: "none",
            borderRadius: "8px",
            background: "#2E7D32",
            color: "#fff",
            fontSize: "1rem",
          }}
        >
          Get Started
        </button>
      </div>

      <div style={{ flex: 1 }}>
        <img src={hero} alt="EcoLoop Hero" />
      </div>
    </section>
  );
};

export default LandingPage;