import React from 'react';
import Card from './Card';
import '../App.css'; // Assuming you'll add CSS here

function CardContainer() {
  const cards = [
    { image: '/public/Pacman.png', title: 'Pacman', link: '/link1' },
    { image: '/public/Project.png', title: 'Projects', link: '/Projects' },
    { image: '/public/Skills.png', title: 'Skills', link: '/Skills' },
    { image: '/public/Hobbies.png', title: 'Hobbies', link: '/Hobbies' },
  ];

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <Card key={index} image={card.image} title={card.title} link={card.link} />
      ))}
    </div>
  );
}

export default CardContainer;
