import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - 20XX</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[700px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Associate Software Devloper"
            subTitle="Innorium Business Solutions Pvt. Ltd. - (2023 - Present)"
            result="Mysure"
            des="I have joined in Innorium Business Solutions , mysure as a associative software developer from 8th of sept, 2024"
          />

        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-4xl font-bold">Internship Experience</h2>
        </div>
        <div className="mt-14 w-full h-[700px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Frontend and Backend Intern"
            subTitle="Ideonix Solutions"
            result="Mysure"
            des="I have done my internship while studing MCA. I got a shot to explore MERN Stack during this internship"
          />
           <ResumeCard
            title="Frontend and Backend Intern"
            subTitle="TechCentrix"
            result="Mysure"
            des="I have done my internship while studing MCA. I got a shot to explore PHP FullStack during this internship"
          />
          
          
        </div>
         
      
      </div>
    </motion.div>
  );
};

export default Experience;
