import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Educational Qualification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
  title="Master of Computer Applications"
  subTitle="Vivekananda College of Engineering and Technology (2022 - 2024)"
  result="7.7 CGPA"
  des="Studied IT-related subjects such as Operating Systems, DBMS, OOPS, ML, Web Development, AI, DSA,IOT etc."
/>
<ResumeCard
  title="Bachelor of Science"
  subTitle="JSS College of Arts, Commerce, and Science (2019 - 2022)"
  result="82%"
  des="Studied Mathematics, Physics, and Computer Science (C, Java, C#)."
/>

          <ResumeCard
            title="Pre-University College"
            subTitle="Junior Collage Nanjangud (2017 - 2019)"
            result="74% "
            des="Studied Physics,Chemisry,Mathematics and Biology."
          />
            <ResumeCard
            title="Primary & Secondary School Education"
            subTitle="Shri shri Kanteshwara Vidya Samsthe(2013 - 2017)"
            result="90% "
            des="Studied in this school from primary to 10th std. SSC Subjects: English, Hindi, Kannada, Maths, Science, Social Sciences."
          /> 
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023-2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="MERN Stack with Blog Project"
            subTitle="Codedamn - Jan-2024"
            result="View"
            des="A comprehensive course on building a full-stack blog application from scratch, covering backend and frontend development with deployment."
            certref='https://codedamn.com/certificate/verify/f0591e8cb43aa12ad5e57654c438ac6aedc632aa'

          />
          <ResumeCard
            title="Learn ReactJS by Building 5 Projects"
            subTitle="Codedamn - Feb-2024"
            result="View"
            des="A beginner-friendly course that teaches ReactJS by building projects, starting with the basics and progressing to more advanced applications."
            certref='https://codedamn.com/certificate/verify/1bfd71f0ae2732be983dd49b2a1bf9448ed27b88'
          />
          <ResumeCard
            title="Tailwind CSS Crash Course"
            subTitle="Codedamn - Jan-2024"
            result="view"
            des="A comprehensive course that teaches web design using Tailwind CSS and React, enabling you to build stylish, responsive websites efficiently."
            certref="https://codedamn.com/certificate/verify/95716dab875994379646f7e62f0eec0a1515bbb1"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education