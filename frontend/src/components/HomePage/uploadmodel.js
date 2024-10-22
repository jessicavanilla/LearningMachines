import React, { useState } from 'react';
import '../../styles/HomePage/uploadmodel.css';

const UploadModal = ({ isVisible, onClose, onSubmit }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [cameraActive, setCameraActive] = useState(false);

  // Function to handle file selection for image upload
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Set preview of the selected image
    }
  };

  // Function to access the camera directly
  const handleCameraClick = () => {
    setCameraActive(true);
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        const videoElement = document.querySelector('#camera-stream');
        if (videoElement) {
          videoElement.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error("Error accessing camera: ", err);
      });
  };

  // Function to change the selected image
  const handleChangeImage = () => {
    setSelectedImage(null);
    setCameraActive(false);
  };

  // Function to handle the submit button click
  const handleSubmit = () => {
    if (selectedImage) {
      // Pass the selected image back to the parent component or store it for later use
      onSubmit(selectedImage);
      onClose(); // Close the modal after submission
    }
  };

  if (!isVisible) return null; // Do not render the modal if it's not visible

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>×</span>

        {/* Conditionally show upload and camera options if no image has been selected */}
        {!selectedImage && (
          <div className="modal-options">
            {/* Upload Image Option */}
            <div className="option" onClick={() => document.getElementById('file-upload').click()}>
              <label className="icon">+</label>
              <p>Upload Image</p>
              <input
                type="file"
                id="file-upload"
                accept="image/png, image/jpeg"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </div>

            {/* Camera Option */}
            <div className="option" onClick={handleCameraClick}>
              <label className="icon">📷</label>
              <p>Take a Picture</p>
            </div>
          </div>
        )}

        {/* Show the preview of the selected image */}
        {selectedImage && (
          <div className="image-preview">
            <p>Selected Image:</p>
            <img src={selectedImage} alt="Selected" />
          </div>
        )}

        {/* Show the camera stream if camera is active */}
        {cameraActive && (
          <div className="camera-preview">
            <video id="camera-stream" autoPlay style={{ width: '100%' }}></video>
          </div>
        )}

        {/* Show the submit and change image buttons if an image is selected */}
        {selectedImage && (
          <div className="submit-container">
            <button className="submit-button" onClick={handleSubmit}>Submit</button>
            <button className="change-image-button" onClick={handleChangeImage}>Change Image</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadModal;
