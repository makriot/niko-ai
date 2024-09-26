import React, { useState } from "react";
import "../styles/Marketplace.css";
import { useNavigate } from "react-router-dom";

const Marketplace = () => {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const [isFilterOpen, setFilterOpen] = useState(false);

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  const toggleFilterMenu = () => {
    setFilterOpen(!isFilterOpen);
  };

  const navigate = useNavigate();

  const handleConstructorButtonClick = () => {
    navigate("/constructor"); // Navigate to the /constructor page
  };

  const handleRegisterBakerButtonClick = () => {
    navigate("/register-baker"); // Navigate to the /constructor page
  };

  return (
    <div className="marketplace">
      {/* Header Section */}
      <header className="header">
        <div className="logo">NIKO</div>
        <div className="search-container">
          <input type="text" placeholder="Поиск" className="search-input" />
        </div>
        <div className="profile-icon" onClick={toggleProfileMenu}>
          <span>&#x1F464;</span> {/* Profile icon */}
        </div>
      </header>

      {/* Profile Menu */}
      {isProfileMenuOpen && (
        <div className="profile-menu">
          <button>Клиентам</button>
          <button onClick={handleRegisterBakerButtonClick}>
            Войти / Зарегистрироваться
          </button>
          <button>Партнерам</button>
          <button>Войти как магазин</button>
          <button>Разместить свои товары</button>
        </div>
      )}

      {/* Main Content */}
      <div className="main-content">
        <div className="top-half">
          <button
            className="action-button"
            onClick={handleConstructorButtonClick}
          >
            Конструктор
          </button>

          {/* <button className="action-button">Сгенерировать дизайн</button> */}
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
                <h3>Тип кондитерского изделия</h3>
                <button>Торты</button>
                <button>Кейкпопсы</button>
                <button>Пирожные</button>
                <button>Бенто-торт</button>
                <button>Трайфл</button>
                <button>Макаруны</button>
                <button>Десертные сеты</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;