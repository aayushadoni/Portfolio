import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import {
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiNestjs,
  SiSvelte,
  SiBootstrap,
  SiLeaflet,
  SiJest,
  SiChai,
  SiMocha,
} from "react-icons/si";
import { RiVuejsLine } from "react-icons/ri";

const Frameworks = () => {
  return (
    <div
      className="flex flex-col items-start py-4 px-6 w-[90vw] lg:w-full rounded-lg col-span-12 lg:col-span-4"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
      }}
    >
      <h3 className="text-white font-bold text-xl mt-2">
        Frameworks & Libraries
      </h3>
      <p className="text-gray-500 text-sm mt-1">
        Libraries and Frameworks that I commonly work with
      </p>
      <div className="flex items-center flex-wrap mt-8 w-fulljustify-center">
        <div className="flex flex-col items-center mx-3 md:mx-4 my-4">
          <FaReact className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen text-sm md:text-base ">React Js</p>
        </div>
        <div className="flex flex-col items-center mx-3 md:mx-4 my-4">
          <SiNextdotjs className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen text-sm md:text-base ">Next Js</p>
        </div>
        <div className="flex flex-col items-center mx-3 md:mx-4 my-4">
          <RiVuejsLine className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen text-sm md:text-base ">Vue Js</p>
        </div>
        <div className="flex flex-col items-center mx-3 md:mx-4 my-4">
          <FaNodeJs className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen text-sm md:text-base ">Node Js</p>
        </div>
        <div className="flex flex-col items-center mx-3 md:mx-4 my-4">
          <SiSvelte className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen text-sm md:text-base ">Svelte Js</p>
        </div>
        <div className="flex flex-col items-center mx-3 md:mx-4 my-4">
          <SiBootstrap className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen text-sm md:text-base ">Bootstrap</p>
        </div>
        <div className="flex flex-col items-center mx-3 md:mx-4 my-4">
          <SiTailwindcss className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen text-sm md:text-base ">Tailwind CSS</p>
        </div>
        <div className="flex flex-col items-center mx-3 md:mx-4 my-4">
          <SiLeaflet className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen text-sm md:text-base ">Leaflet</p>
        </div>
        <div className="flex flex-col items-center mx-3 md:mx-4 my-4">
          <SiJest className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen text-sm md:text-base ">Jest</p>
        </div>
        <div className="flex flex-col items-center mx-3 md:mx-4 my-4">
          <SiChai className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen text-sm md:text-base ">Chai</p>
        </div>
        <div className="flex flex-col items-center mx-3 md:mx-4 my-4">
          <SiMocha className="text-3xl md:text-5xl text-gray-400" />
          <p className="text-lightGreen text-sm md:text-base ">Mocha</p>
        </div>
      </div>
    </div>
  );
};

export default Frameworks;
