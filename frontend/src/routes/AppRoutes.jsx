import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const Placeholder = ({ title }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontSize: "2rem",
      fontWeight: "600",
    }}
  >
    {title}
  </div>
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Placeholder title="Landing Page" />}
      />

      <Route
        path="/login"
        element={
          <PublicRoute>
            <Placeholder title="Login Page" />
          </PublicRoute>
        }
      />

      <Route
        path="/register"
        element={
          <PublicRoute>
            <Placeholder title="Register Page" />
          </PublicRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Placeholder title="Citizen Dashboard" />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;