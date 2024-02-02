import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import {  useSelector } from "react-redux";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";

const App = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.token);

  return (
    // <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />} />
          <Route path="/register" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Register />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    // </Provider>
  );
};

export default App;
