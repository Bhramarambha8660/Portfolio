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
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="React 18"
            subTitle="Codedamn - Oct-2022"
            result="View"
            des="Learnt react and how to develop a dynamic web application from scratch !"
            certref='https://codedamn.com/certificate/verify/c930bd7a08aac934c2b3da65601c3397a1f1384c'

          />
          <ResumeCard
            title="Learn MongoDb and Node JS"
            subTitle="Codedamn - Sept-2022"
            result="View"
            des="I have learnt how to write queries in mongodb and using mongoose as the ORM for mongodb in Node JS."
            certref='https://codedamn.com/certificate/verify/e5c2a4d4d28d42c845d5f00b12c07e126c2504eb'
          />
          <ResumeCard
            title="Web Security"
            subTitle="Codedamn - Sept-2022"
            result="view"
            des="Learnt how to build a secured web app. Also learned using bcrypt and jwt for authentication and authorization."
            certref="https://codedamn.com/certificate/verify/a28a175a7d74e26236fedde1d1710cf4f9e1f8ba"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education