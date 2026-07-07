import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
const savedUser = localStorage.getItem("user");

try {
  if (
    token &&
    savedUser &&
    savedUser !== "undefined"
  ) {
    setUser(JSON.parse(savedUser));
  }
} catch (error) {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
}

setLoading(false);
  }, []);

  const login = (token, userData) => {
    localStorage.setItem("token", token);

    localStorage.setItem("user", JSON.stringify(userData));

    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("user");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);