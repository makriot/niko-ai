import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/UploadPhoto.css";

const UploadBakerPhoto = () => {
  const navigate = useNavigate();

  const handleUpload = (event) => {
    event.preventDefault();
    // Handle photo upload logic here
    // For now, just navigate back or to another page
    navigate("/marketplace"); // Change this to where you want to navigate after upload
  };

  return (
    <div className="upload-photo-page">
      <h1 className="title">UPLOAD BAKER PHOTO</h1>
      <form onSubmit={handleUpload}>
        <div className="photo-upload">
          <input type="file" id="upload-photo" required />
          <label htmlFor="upload-photo">Add Photo</label>
        </div>
        <button type="submit" className="submit-button">
          UPLOAD
        </button>
      </form>
    </div>
  );
};

export default UploadBakerPhoto;
