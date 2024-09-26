import React, { useState } from "react";
import "../styles/RegisterBaker.css"; // Import the CSS

const RegisterBaker = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, avatar: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
  };

  return (
    <div className="register-container">
      {/* Login Button */}
      <div className="login-wrapper">
        <button className="login-button">Вход</button>

        {/* Flying Login Form */}
        <div className="flying-login-form">
          <h2>Вход</h2>
          <form className="login-form">
            <label>
              Email:
              <input type="email" name="loginEmail" className="login-input" />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="loginPassword"
                className="login-input"
              />
            </label>
            <button type="submit" className="login-button-submit">
              Войти
            </button>
          </form>
        </div>
      </div>

      <h1 className="register-title">Register as a Baker</h1>
      <form onSubmit={handleSubmit} className="register-form">
        {/* Avatar Upload */}
        <label className="register-label">
          Avatar:
          <input type="file" name="avatar" onChange={handleFileChange} />
        </label>

        {/* Name Input */}
        <label className="register-label">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="register-input"
          />
        </label>

        {/* Email Input */}
        <label className="register-label">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="register-input"
          />
        </label>

        {/* Password Input */}
        <label className="register-label">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="register-input"
          />
        </label>

        {/* Submit Button */}
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterBaker;