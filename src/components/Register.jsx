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
  const [birthdate, setBirthdate] = useState('');

  const handleRegister = () => {
    // Validate the form data
    if (!firstName || !lastName || !email || !password || !confirmPassword || !birthdate) {
      console.error('Please fill in all fields');
      return;
    }

    // Implement additional validation if needed

    // Create user data object
    const userData = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      profilePicture,
      birthdate,
    };

    // Dispatch the registration action
    dispatch(register(userData));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(file);
    }
  };
  

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '30vw', height: '50vh', justifyContent: 'space-between', marginTop: '25vh', margin: 'auto' }}>
      <h2>Register</h2>
      <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
