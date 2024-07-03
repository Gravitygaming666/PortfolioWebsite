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
        I like coding as I learned to code myself and did it in education. 
        Also I like playing video games such as dark souls and 
        other dark souls type games. 
        The reason I like these types of games is because I like to be challenged 
        and I feel like these games can provide the right amount of challenge.
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