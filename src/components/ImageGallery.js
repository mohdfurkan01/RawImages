
import React from 'react';
import ExifReader from 'exif-js';

// ImageGallery component responsible for displaying image previews
const ImageGallery = ({ images }) => {
  // Handle image click event to display Exif information
  const handleImageClick = (image) => {
    // Use ExifReader to load and display Exif data
    const exifData = ExifReader.load(image.exif);
    console.log('Exif Data:', exifData);
  };

  // Render the image gallery with clickable image items
  return (
    <div className="image-gallery">
      {images.map((image) => (
        <div key={image.id} className="image-item" onClick={() => handleImageClick(image)}>
          <img src={`http://your-api/images/${image.filename}`} alt={`Image ${image.id}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
