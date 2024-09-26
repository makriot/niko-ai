import React, { useState } from "react";
import "../styles/Constructor.css"; // Подключим CSS для стилизации

const CakeDesigner = () => {
  const [activeTab, setActiveTab] = useState("design"); // Управление активной вкладкой
  const [uploadedImage, setUploadedImage] = useState(null); // Для загруженной картинки
  const [generatedImage, setGeneratedImage] = useState(null); // Для сгенерированной картинки
  const [selectedOption, setSelectedOption] = useState(""); // Состояние для выбранного варианта начинки

  // Функция для переключения вкладок
  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  // Функция для загрузки фото
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result); // Сохраняем изображение в состоянии
      };
      reader.readAsDataURL(file);
    }
  };

  // Функция для генерации нового изображения
  const handleGenerate = () => {
    // Здесь должно быть обращение к API для получения нового изображения
    const randomImage = "https://source.unsplash.com/featured/?cake";
    setGeneratedImage(randomImage);
  };

  // Функция для обработки выбора в select
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Функция для обработки подтверждения выбора
  const handleSubmit = () => {
    alert(`Вы выбрали: ${selectedOption}`);
  };

  return (
    <div className="cake-designer">
      {/* Вкладки */}
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "filling" ? "active" : ""}`}
          onClick={() => handleTabSwitch("filling")}
        >
          Начинка
        </button>
        <button
          className={`tab-button ${activeTab === "design" ? "active" : ""}`}
          onClick={() => handleTabSwitch("design")}
        >
          Дизайн
        </button>
      </div>

      {/* Содержимое вкладок */}
      {activeTab === "filling" ? (
        <div className="tab-content">
          <h2>Выберите форму для торта</h2>
          <div className="design-options">
            <button>Круглая</button>
            <button>Квадратная</button>
          </div>

          <div>
            <h2>Выберите начинку для вашего торта</h2>
            <select value={selectedOption} onChange={handleChange}>
              <option value="" disabled>
                -- Выберите --
              </option>
              <option value="option1">Вариант 1</option>
              <option value="option2">Вариант 2</option>
              <option value="option3">Вариант 3</option>
            </select>
            <button onClick={handleSubmit}>Подтвердить</button>
          </div>
        </div>
      ) : (
        <div className="tab-content">
          <div className="upload-section">
            <h3>Вставьте фото</h3>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {uploadedImage && (
              <div className="uploaded-image">
                <img src={uploadedImage} alt="Uploaded" />
              </div>
            )}
          </div>

          <div className="prompt-container">
            <input
              type="text"
              placeholder="Что добавить?"
              className="prompt-input"
            />
          </div>

          {/* Кнопка для генерации изображения */}
          <div className="generate-section">
            <button className="generate-button" onClick={handleGenerate}>
              Сгенерировать
            </button>
            {generatedImage && (
              <div className="generated-image">
                <h3>Сгенерированное изображение:</h3>
                <img src={generatedImage} alt="Generated" />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Кнопка для отправки */}
      <div className="submit-section">
        <button className="submit-button">Отправить кондитерам</button>
      </div>
    </div>
  );
};

export default CakeDesigner;
