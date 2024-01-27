// AuthUtils.js

// Function to check if the user is authenticated
export const isAuthenticated = () => {
  return localStorage.getItem("userRole") !== null;
};

// Function to get the user role
export const getUserRole = () => {
  return new Promise((resolve) => {
    const userRole = sessionStorage.getItem("userRole");
    resolve(userRole);
  });
};
