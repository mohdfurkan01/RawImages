
import React, { useState } from 'react';
import ImageUploader from './components/ImageUploader';
import ImageGallery from './components/ImageGallery';
import "./App.css"

// Main App component integrating ImageUploader and ImageGallery
const App = () => {
  // State to keep track of uploaded images
  const [uploadedImages, setUploadedImages] = useState([]);

  // Handle the upload event and update the state with uploaded image information
  const handleUpload = (imageInfo) => {
    setUploadedImages([...uploadedImages, imageInfo]);
  };

  // Render the App with ImageUploader and ImageGallery
  return (
    <div className="app">
      <ImageUploader onUpload={handleUpload} />
      <ImageGallery images={uploadedImages} />
    </div>
  );
};

export default App;
