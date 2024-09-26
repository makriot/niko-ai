import React, { useState } from "react";
import "../styles/Constructor.css"; // Подключим CSS для стилизации

const CakeDesigner = () => {
  const [activeTab, setActiveTab] = useState("design");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [prompt, setPrompt] = useState("");

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  // Обработчик загрузки изображения
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Отправка данных на сервер и получение сгенерированного изображения
  const handleGenerate = async () => {
    if (!uploadedImage || !prompt) {
      alert("Загрузите изображение и введите текст!");
      return;
    }
  
    try {
      // Преобразуем base64 обратно в файл (Blob)
      const file = dataURLtoFile(uploadedImage, "uploaded_image.png");
  
      const formData = new FormData();
      formData.append("image", file); // Отправляем файл
      formData.append("prompt", prompt);
  
      const response = await fetch("http://localhost:8080/api/generate-image", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error("Ошибка при генерации изображения");
      }
  
      const data = await response.json();
      setGeneratedImage(`http://localhost:8080${data.imageUrl}`); // Используем полный путь к изображению
    } catch (error) {
      console.error("Ошибка при генерации:", error);
    }
  };
  
  // Вспомогательная функция для преобразования base64 в файл (Blob)
  function dataURLtoFile(dataurl, filename) {
    let arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Вы выбрали: ${selectedOption}`);
  };

  return (
    <div className="cake-designer">
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
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

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

      <div className="submit-section">
        <button className="submit-button">Отправить кондитерам</button>
      </div>
    </div>
  );
};

export default CakeDesigner;
