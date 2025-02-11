import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive,projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Check these out on my github"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="CodePen Clone"
          des="A CodePen Clone built for seamless front-end coding, enabling real-time HTML, CSS, and JavaScript previews with a user-friendly interface build using React. "
          src={projectOne}
          githubLink="https://github.com/Bhramarambha8660/CodePen-Clone"

        />
        <ProjectsCard
          title="Hospital Website"
          des="The Expense Tracker is an innovative application that leverages Machine Learning (ML) algorithms to analyze users' spending patterns and provide personalized financial insights. The goal is to help users make informed financial decisions and improve their budget management."
          src={projectTwo}
          githubLink="https://github.com/Bhramarambha8660/HospitalWebsite_PHP"
        />
        <ProjectsCard
          title="Crop Protection From Animals"
          des="This IoT-based crop protection system uses an Arduino to detect when animals touch the fence wires. Upon contact, a buzzer is activated, emitting a sound to scare the animals away and prevent crop damage. This solution is cost-effective, eco-friendly, and ensures crop safety without harming animals, making it ideal for modern farming."
          src={projectThree}
        />
        <ProjectsCard
          title="Typing Game"
          des="A challenge to test and improve typing speed and accuracy."
          src={projectFour}
          githubLink="https://github.com/Bhramarambha8660/Typing-Game"
          
        />
        <ProjectsCard
          title="Breakout Game"
          des="A fun and interactive game where you break bricks using a bouncing ball and a paddle."
          src={projectFive}
          githubLink="https://github.com/Bhramarambha8660/Breakout-Game"
        />
        <ProjectsCard
          title="Password Generator "
          des="A tool that creates strong and customizable passwords to enhance security."
          src={projectSix}
          githubLink="https://github.com/Bhramarambha8660/Password-Generator"     
        />
      </div>
    </section>
  );
}

export default Projects