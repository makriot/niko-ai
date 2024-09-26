// src/pages/UploadBakerPhoto.js
import React, { useState } from "react";
import "../styles/UploadPhoto.css";

const UploadBakerPhoto = () => {
  const [photo, setPhoto] = useState(null);

  const handlePhotoUpload = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!photo) {
      alert("Please upload a photo!");
      return;
    }
    alert("Registration Complete!");
  };

  return (
    <div className="upload-photo-container">
      <h2>Upload Your Bakery's Photo</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handlePhotoUpload} accept="image/*" />
        {photo && <img src={photo} alt="Bakery Preview" className="preview" />}
        <button type="submit">Complete Registration</button>
      </form>
    </div>
  );
};

export default UploadBakerPhoto;
