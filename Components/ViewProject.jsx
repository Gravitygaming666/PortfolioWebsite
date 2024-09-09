import React from 'react';

const ViewProject = () => {
  return (
    <div>
      <a 
        href="https://pacman-for-my-website.vercel.app" // The external URL
        target="_blank" // Opens the link in a new tab
        rel="noopener noreferrer" // Recommended for security when using target="_blank"
        style={{
            display: 'inline-block',
            padding: '10px 20px',
            border: '2px solid Black', // Border with a color similar to light blue
            backgroundColor: 'transparent', // Background should be transparent
            color: '#75D9EA', // Text color similar to light blue
            textDecoration: 'none', // Removes the default underline from anchor tag
            fontWeight: 'bold',
            textAlign: 'center',
            position: 'relative',
            fontSize: '14px',
        }}
      >
        View Pacman Project
      </a>
    </div>
  );
}

export default ViewProject;