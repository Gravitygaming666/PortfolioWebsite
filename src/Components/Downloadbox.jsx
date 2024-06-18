import React from 'react';
import '../App.css'; // Import the CSS file for styling

const DownloadBox = () => {
  const handleDownload = () => {
    // Logic to download the file
    const link = document.createElement('a');
    link.href = 'assets/RyanCV.pdf'; // file path
    link.download = 'RyanCV.pdf'; // The name for the downloaded file
    link.click();
  };

  return (
    <div className="container">
      <div className="download-box">
        <button className="download-button" onClick={handleDownload}>
          Download File
        </button>
      </div>
      <img className="image" src="Public/Ryan.png" alt="Description" />
      
    </div>
  );
};

export default DownloadBox;