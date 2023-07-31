import React, { useState } from 'react';
import './User.css'; // Import the CSS file for styling

const UserPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const [registrationData, setRegistrationData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [loginError, setLoginError] = useState(null);
  const [registrationError, setRegistrationError] = useState(null);

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleRegisterClick = () => {
    setIsLogin(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Basic validation: check if the fields are empty
    if (!loginData.username || !loginData.password) {
      setLoginError('Please fill in all fields.');
      return;
    }

    // If there are no errors, you can proceed with form submission
    setLoginError(null);
    console.log('Login form submitted:', loginData);
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    // Basic validation: check if the fields are empty
    if (
      !registrationData.username ||
      !registrationData.email ||
      !registrationData.password ||
      !registrationData.confirmPassword
    ) {
      setRegistrationError('Please fill in all fields.');
      return;
    }

    // Additional validation for password match
    if (registrationData.password !== registrationData.confirmPassword) {
      setRegistrationError('Passwords do not match.');
      return;
    }

    // If there are no errors, you can proceed with form submission
    setRegistrationError(null);
    console.log('Registration form submitted:', registrationData);
  };

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegistrationInputChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="user-page-container">
      <div className="tabs-container">
        <button onClick={handleLoginClick} className={isLogin ? 'active' : ''}>
          Login
        </button>
        <button onClick={handleRegisterClick} className={!isLogin ? 'active' : ''}>
          Register
        </button>
      </div>
      {isLogin ? (
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit}>
            {/* Login form fields */}
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={loginData.username}
              onChange={handleLoginInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleLoginInputChange}
            />
            {loginError && <p className="error">{loginError}</p>}
            <button type="submit">Login</button>
          </form>
          <p className="switch-option" >Don't have an account?
          <span onClick={handleRegisterClick}>Register</span>
         
          </p>
        </div>
      ) : (
        <div className="register-container">
          <h2>Register</h2>
          <form onSubmit={handleRegistrationSubmit}>
            {/* Registration form fields */}
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={registrationData.username}
              onChange={handleRegistrationInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={registrationData.email}
              onChange={handleRegistrationInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={registrationData.password}
              onChange={handleRegistrationInputChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={registrationData.confirmPassword}
              onChange={handleRegistrationInputChange}
            />
            {registrationError && <p className="error">{registrationError}</p>}
            <button type="submit">Register</button>
          </form>
          <p className="switch-option"> Already have an account? 
          <span onClick={handleLoginClick}>Login</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default UserPage;
