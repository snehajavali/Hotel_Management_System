export const isLoggedIn = () => {
  return !!localStorage.getItem("token");
};

export const getUserRole = () => {
  return localStorage.getItem("role"); // "admin" or "user"
};

export const login = (token, role) => {
  localStorage.setItem("token", token);
  localStorage.setItem("role", role);
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
};
