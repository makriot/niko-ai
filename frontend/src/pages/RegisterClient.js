import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/RegistrationPage.css"; // Adjusted path to the CSS file

const RegisterClient = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle Baker registration button click
  const handleBakerClick = () => {
    navigate("/register-baker"); // Navigate to the baker registration page
  };

  return (
    <div className="registration-page">
      <header className="header">
        <div className="logo">NIKO</div>
        <input type="text" placeholder="Search" className="search-input" />
        <div className="profile-icon">&#x1F464;</div>
      </header>

      <h1 className="title">REGISTRATION</h1>

      <div className="role-buttons">
        <button className="role-button active">I'm a Client</button>
        <button className="role-button" onClick={handleBakerClick}>
          I'm a Baker
        </button>
      </div>

      <div className="registration-form">
        <form>
          <input type="text" placeholder="First Name" className="form-input" />
          <input type="text" placeholder="Last Name" className="form-input" />
          <input
            type="text"
            placeholder="Phone Number"
            className="form-input"
          />
          <input type="email" placeholder="Email" className="form-input" />
          <input type="date" className="form-input" />
          <div className="photo-upload">
            <input type="file" id="upload-photo" />
            <label htmlFor="upload-photo">Add Photo</label>
          </div>
          <button type="submit" className="submit-button">
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterClient;
