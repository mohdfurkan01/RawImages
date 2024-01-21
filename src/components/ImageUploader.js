
import React from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';

// ImageUploader component responsible for handling image uploads
const ImageUploader = ({ onUpload }) => {
  // Handle drop event when a user uploads an image
  const handleDrop = async (acceptedFiles) => {
    // Create a FormData object to send the image file to the server
    const formData = new FormData();
    formData.append('image', acceptedFiles[0]);

    try {
      // Make a POST request to the server to handle the image upload
      const response = await axios.post('http://localhost:3000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      // Pass the uploaded image information to the parent component
      onUpload(response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  // Render the Dropzone component for file upload
  return (
    <Dropzone onDrop={handleDrop} accept="image/*" multiple={false}>
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()} className="dropzone">
          <input {...getInputProps()} />
          <p>Drag 'n' drop a RAW image here, or click to select one</p>
        </div>
      )}
    </Dropzone>
  );
};

export default ImageUploader;
