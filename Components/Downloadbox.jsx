import React from 'react';
import '../App.css'; // Import the CSS file for styling

const DownloadBox = () => {
  const handleDownload = () => {
    // Logic to download the file
    const link = document.createElement('a');
    link.href = '/RyanHillCV.pdf'; // file path
    link.download = 'RyanHillCV.pdf'; // The name for the downloaded file
    link.click();
  };

  return (
    <div className="container">
      <div className="download-box">
        <h2>My Name is Ryan</h2>
       
        <p>
        I like coding because I learned it myself and practiced it during my education. 
        I also enjoy playing video games, especially Dark Souls and similar games. 
        The reason I like these types of games is that I enjoy being challenged, 
        and I feel they provide the right amount of difficulty.
        </p>
        <button className="download-button" onClick={handleDownload}>
          Download CV
        </button>
      </div>
      <img className="image" src="/Ryan.png" alt="Ryan" />
      
    </div>
  );
};

export default DownloadBox;