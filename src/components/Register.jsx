// Register.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../actions/authActions';

const Register = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleRegister = () => {
    // Implement validation and API call for registration
    const userData = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      profilePicture,
    };
    dispatch(register(userData));
  };

  console.log("rendered")

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    // You may want to handle file upload here
    setProfilePicture(file);
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
