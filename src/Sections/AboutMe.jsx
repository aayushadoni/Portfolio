import React from "react";
import { AiOutlineFileDone } from "react-icons/ai";
import { RESUME_URL, PROFILE_PHOTO_URL } from "../Constants";

const AboutMe = ({ reference }) => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center bg-darkGrey py-24"
      ref={reference}
    >
      <h3 className="text-white font-bold text-3xl text-center md:text-5xl ">
        About Me
      </h3>
      <p className="text-lightGreen font-medium mt-1">Introduction</p>
      <div className="flex flex-col lg:flex-row py-10 mt-2 md:mt-12 px-6 md:px-36 items-center md:items-start w-full justify-center">
        <div className="overflow-hidden flex items-center justify-center lg:justify-end w-full rounded-2xl my-2 rounded">
          <img
            src={PROFILE_PHOTO_URL}
            alt="Aayush Adoni"
            className="w-[300px] h-[300px] rounded"
          />
        </div>
        <div className="flex  flex-col items-center justify-center w-full lg:mt-0 mt-10 px-6 md:px-12 text-center ">
          <p className="text-gray-200">
            Hello! I am Aayush, a 7th semester (4th year) student at IIIT Gwalior
            currently pursuing my Integrated B.Tech in Information Technology,
            with <span className="font-extrabold text-lightGreen">7.13/10</span>{" "}
            CPI.
          </p>
          <p className="text-gray-400 mt-5">
            I am a MERN Stack and Blockchain Developer and I really enjoy learning
            new things, seeking opportunities and building products that add
            value. My focus remains on not just aquiring software engineering
            principles to make cool Applications, but at the same time, also
            leveraging the power of blockchain technology to create decentralized and secure solutions.
          </p>
          <p className="text-gray-400 mt-5">
            I am focussed, organised and a good team player. In free time, I
            like to play FPS games and edit photos.
          </p>
          <a
            className="bg-lightGreen py-2.5 w-[230px] mt-6 px-4 rounded-md text-darkGrey font-bold flex items-center hover:bg-white"
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
          >
            Download Resume{" "}
            <AiOutlineFileDone className="ml-3 font-bold text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
