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
        <h2>Ryan Hill</h2>
       
        <p>
        An aspiring Software Developer based in Bolton, with experience
         learning coding languages independently and collaborating on projects.
          Proficient in JavaScript, C++, C#, React, HTML5 and CSS. 
        A complex problem solver with an analytical mind and passion
         for learning new technologies and programming languages. 
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