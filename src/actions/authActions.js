// authActions.js

export const login = (userData) => ({
  type: "LOGIN",
  payload: fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  }).then(response => response.json()),
});

export const logout = () => ({
  type: "LOGOUT",
});

export const register = (userData) => ({
  type: "REGISTER",
  payload: fetch('http://localhost:3000/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  }).then(response => response.json()),
});
