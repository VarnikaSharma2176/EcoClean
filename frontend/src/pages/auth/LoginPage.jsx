import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { loginUser } from "../../services/auth.service";
import { useAuth } from "../../context/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await loginUser(formData);

      login(response.data.data.token, response.data.data.user);

      toast.success("Login successful!");

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "420px",
          padding: "40px",
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 0 15px rgba(0,0,0,.08)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#2E7D32",
          }}
        >
          Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <button
          type="submit"
          disabled={loading}
          style={buttonStyle}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "18px",
  border: "1px solid #ddd",
  borderRadius: "8px",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  background: "#2E7D32",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
};

export default LoginPage;