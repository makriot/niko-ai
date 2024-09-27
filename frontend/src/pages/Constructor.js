import React, { useState } from "react";
import "../styles/Constructor.css"; // Подключим CSS для стилизации
import Replicate from "replicate";

const CakeDesigner = () => {
  const [activeTab, setActiveTab] = useState("design"); // Управление активной вкладкой
  const [uploadedImage, setUploadedImage] = useState(null); // Для загруженной картинки
  const [generatedImage, setGeneratedImage] = useState(null); // Для сгенерированной картинки
  const [selectedOption, setSelectedOption] = useState(""); // Состояние для выбранного варианта начинки

  // Функция для переключения вкладок
  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  const replicate = new Replicate();

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
  const handleGenerate = async () => {
    console.log("Running the model...");
    const output = await replicate.run(
      "black-forest-labs/flux-dev",
      {
        input: {
          prompt: "Big cake with unicorn on the top",
        },
      }
    );
    // Здесь должно быть обращение к API для получения нового изображения output[0]
    const randomImage = output[0];
    setGeneratedImage(randomImage);
  };

  // Функция для обработки выбора в select
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Функция для обработки подтверждения выбора
  const handleSubmit = () => {
    alert(`You have chosen: ${selectedOption}`);
  };

  return (
    <div className="cake-designer">
      {/* Вкладки */}
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "filling" ? "active" : ""}`}
          onClick={() => handleTabSwitch("filling")}
        >
          Filling
        </button>
        <button
          className={`tab-button ${activeTab === "design" ? "active" : ""}`}
          onClick={() => handleTabSwitch("design")}
        >
          Design
        </button>
      </div>

      {/* Содержимое вкладок */}
      {activeTab === "filling" ? (
        <div className="tab-content">
          <h2>Choose the shape for the cake</h2>
          <div className="design-options">
            <button>Circle</button>
            <button>Square</button>
          </div>

          <div>
            <h2>Choose the filling for your cake</h2>
            <select value={selectedOption} onChange={handleChange}>
              <option value="" disabled>
                -- Choose --
              </option>
              <option value="option1">Chocolate</option>
              <option value="option2">Chocolate-nut mousse</option>
              <option value="option3">Berry mousse</option>
              <option value="option3">Cheesecake</option>
              <option value="option3">Cream cheese</option>
            </select>
            <button onClick={handleSubmit}>Confirm</button>
          </div>
        </div>
      ) : (
        <div className="tab-content">
          <div className="upload-section">
            <h3>Upload a photo</h3>
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
              Generate
            </button>
            {generatedImage && (
              <div className="generated-image">
                <h3>Generated image:</h3>
                <img src={generatedImage} alt="Generated" />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Кнопка для отправки */}
      <div className="submit-section">
        <button className="submit-button">Send to the bakers</button>
      </div>
    </div>
  );
};

export default CakeDesigner;
