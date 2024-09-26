import React, { useState } from "react";
import "../styles/Marketplace.css"; // Make sure the path is correct
import { useNavigate } from "react-router-dom";

const Marketplace = () => {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const [isFilterOpen, setFilterOpen] = useState(false);
  const navigate = useNavigate();

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  const toggleFilterMenu = () => {
    setFilterOpen(!isFilterOpen);
  };

  const handleConstructorButtonClick = () => {
    navigate("/constructor"); // Navigate to the /constructor page
  };

  const handleRegisterBakerButtonClick = () => {
    navigate("/register-baker"); // Navigate to the /register-baker page
  };

  const handleRegisterClientButtonClick = () => {
    navigate("/register-client"); // Navigate to the /register-client page
  };

  return (
    <div className="marketplace">
      {/* Header Section */}
      <header className="header">
        <div className="logo">NIKO</div>
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        <div className="profile-icon" onClick={toggleProfileMenu}>
          <span>&#x1F464;</span> {/* Profile icon */}
        </div>
      </header>

      {/* Profile Menu */}
      {isProfileMenuOpen && (
        <div className="profile-menu">
          <button onClick={handleRegisterClientButtonClick}>
            I'm a Client
          </button>
          <button onClick={handleRegisterBakerButtonClick}>I'm a Baker</button>
          <button>Partners</button>
        </div>
      )}

      {/* Main Content */}
      <div className="main-content">
        <div className="top-half">
          <h2 className="greeting-text">What are you up to today?</h2>
          <button
            className="action-button"
            onClick={handleConstructorButtonClick}
          >
            Constructor
          </button>
        </div>

        <div className="bottom-half">
          <div className="product-list">
            <div className="product">Product 1</div>
            <div className="product">Product 2</div>
            <div className="product">Product 3</div>
            <div className="product">Product 4</div>
          </div>

          {/* Filter button */}
          <div className="filter-button" onClick={toggleFilterMenu}>
            &#x2630; {/* Hamburger icon */}
          </div>

          {/* Filter Panel */}
          {isFilterOpen && (
            <div className="filter-panel">
              <div className="filter-content">
                <h3>Type of Pastry</h3>
                <button>Cakes</button>
                <button>Cake Pops</button>
                <button>Pastries</button>
                <button>Bento Cake</button>
                <button>Trifle</button>
                <button>Macaroons</button>
                <button>Dessert Sets</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
