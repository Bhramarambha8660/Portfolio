import React from 'react'
import { FaLinkedinIn, FaReact,FaVuejs } from "react-icons/fa";
import { SiMongodb,SiExpress,SiGithub ,SiInstagram} from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <a href="https://github.com/bhramarambha8660" target="_blank" rel="noopener noreferrer">
              <SiGithub /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://www.instagram.com/chandana_bhramara?igsh=YXhtM253M2Nob2h1" target="_blank" rel="noopener noreferrer">
              <SiInstagram /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/bhramarambha-c-b-5a565a275/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn /></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST WEB STACK
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiMongodb />
            </span>
            <span className="bannerIcon">
              <SiExpress />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaVuejs />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media