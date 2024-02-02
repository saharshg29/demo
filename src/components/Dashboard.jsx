import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const error = useSelector((state) => state.auth.error);
  const token = useSelector((state) => state.auth.token);
console.log(token)
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
    <p>Welcome! Your token is: {token.token}</p>
  )}
</div>
  );
};

export default Dashboard;
