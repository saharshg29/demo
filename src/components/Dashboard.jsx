import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/authActions';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate()
  const error = useSelector((state) => state.auth.error);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());
    navigate("/login")
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {error ? (
        typeof error === 'string' ? (
          <p>Error: {error}</p>
        ) : (
          <p>Error: {error.message}</p>
        )
      ) : (
        <div>
          <p>Welcome! Your token is: {token && token.token}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
