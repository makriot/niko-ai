import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/RegistrationPage.css"; // Adjusted path to the CSS file
import UploadBakerPhoto from "./UploadBakerPhoto"; // Photo upload page

const RegisterBaker = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    bakeryName: "",
    bakeryLocation: "",
  });

  const [showPhotoUpload, setShowPhotoUpload] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setShowPhotoUpload(true); // Navigate to photo upload page
  };

  if (showPhotoUpload) {
    return <UploadBakerPhoto />;
  }

  return (
    <div className="registration-page">
      <header className="header">
        <div className="logo">NIKO</div>
        <input type="text" placeholder="Search" className="search-input" />
        <div className="profile-icon">&#x1F464;</div>
      </header>

      <h1 className="title">Register as a Baker</h1>

      <div className="role-buttons">
        <button
          className="role-button"
          onClick={() => navigate("/register-client")}
        >
          I'm a Client
        </button>
        <button className="role-button active">I'm a Baker</button>
      </div>

      <div className="registration-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="form-input"
            required
          />
          <input
            type="text"
            name="bakeryName"
            placeholder="Bakery Name"
            value={formData.bakeryName}
            onChange={handleChange}
            className="form-input"
            required
          />
          <input
            type="text"
            name="bakeryLocation"
            placeholder="Bakery Location"
            value={formData.bakeryLocation}
            onChange={handleChange}
            className="form-input"
            required
          />
          <button type="submit" className="submit-button">
            Next: Upload Photo
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterBaker;
