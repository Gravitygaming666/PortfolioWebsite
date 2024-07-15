import React from "react";
import "../App.css";
import hobbies from "../public/Hobbies.png";
import DestinyIcon from "../public/DestinyIcon.png";
import StarWarsIcon from "../public/StarWarsIcon.png";
import GymIcon from "../public/GymIcon.png";


const Hobbiesinfo = () => {
    return (
      <div className="hobby-info">
        <div className="hobby-item">
          <img src={DestinyIcon} alt="Destiny 2" />
          <div className="info">
            <h2>Destiny 2</h2>
            <p> Detiny 2 is a game where you shoot aliens and get loot. 
                How this game has helped me gain skills  that require for a programing job is
                that this game requires you to do team work in this activity called raids. 
                someone has to be the leader of the group and give people roles in the activity 
                which is usually me. this game has gave me leadership skills and teamwork skills.
                
            </p>
          </div>
        </div>
        <div className="hobby-item">
          <img src={StarWarsIcon} alt="Star Wars" />
          <div className="info">
            <h2>Star Wars</h2>
            <p>Star wars is a franchise that I love as Science fiction is 
                probably the most intresting in my opinion. Also it is intresting to see what kind of fake technology
                as it  could be posssible that we could get this advance. 
            </p>
          </div>
        </div>
        <div className="hobby-item">
          <img src={hobbies} alt="Chess" />
          <div className="info">
            <h2>Chess</h2>
            <p>
                I like to play chess as I beileve you have to be in a mindset
                 to play chess like when you are progarmming. I feel like both mindsets are 
                 very simliar to each other in terms of the way you have to think and solve problems. 
            </p>
          </div>
        </div>
        <div className="hobby-item">
          <img src={GymIcon} alt="Gym" />
          <div className="info">
            <h2>Gym</h2>
            <p>
                I go to the gym as I do enjoy going there and also it helps with work in terms of
                 gaining the skill of staying driven to whatever you are doing. I feel like the skill of 
                 staying driven is a difficult skill that not many poeple have.
            </p>
          </div>
        </div>
      </div>
    );
  };

  export default Hobbiesinfo;