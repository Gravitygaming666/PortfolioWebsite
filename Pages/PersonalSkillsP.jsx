import React from "react";
import SkillsContainers from "../Components/SkillsContainer";
import "../App.css";

const items = [
  {
    icon: '/FocusSkill.png',
    title: 'Focus Skill',
    description:
      'My focusing skill allow me to carry on a project that I may not enjoy or allows me to focus when I am in areas that most people would struggle with such as noisy areas. Also able to focus on projects that are close to the deadline instead of stressing about it.',
  },
  {
    icon: '/SocialSkills.png',
    title: 'Social Skills',
    description:
      'my social Skills allow to do things that most people would not want to do in the IT industry which is talking to clients and being able to talk to meets as commutation is key to team work and working with clients',
  },
  {
    icon: '/ProbelmSolving.png',
    title: 'Problem Solving Skill',
    description:
      'my problem solving skills allows me to effectively fix issues with the software and when needed I ask my network for advice as you can ask for help on a problem to see what they think could be a fix then decide if there solution would help you or not',
  },
  {
    icon: '/GrowthMindset.png',
    title: 'Growth Mindset',
    description:
      'Growth Mindset is a skill that is help as I am always thinking how can I improve that software or skill as there is always something to improve. Being able to take feedback from others is good for your growth as always having another person view on a project or skill that you may have is most of the time helpful. I am always open to trying new things.',
  },
  {
    icon: '/Teamwork.png',
    title: 'Teamwork',
    description:
      'Teamwork is very helpful skill to have as in big IT projects, you will have to work on and I have worked on projects with other coders as I am a front-end developer right now so I have worked with back end developers to get a project completed. Also I am willing to follow a brief.',
  },
  {
    icon: '/ClientFacing.png',
    title: 'Client Facing',
    description:
      'The good thing about me being Client Facing is that I can make the Client feel welcomed as I have a very relaxed way of talking. Also I rarely get nervous for things which makes me more relaxed Infront of the client',
  },
];


 

const PersonalSkillsP = () => {
    return (
      <div className="Doccontainer">
      {items.map((item, index) => (
        <SkillsContainers
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
  };

  export default PersonalSkillsP;