import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import ChandanProfile from "../../assets/ChandanProfile.jpg";
import ChandanResume from "../../assets/ChandanResume.pdf";

function Home() {
  return (
    <section id="Home" className="scroll-mt-[10vh]">
      <div
        className="min-h-[calc(100svh-10vh)] max-w-[1400px]
        flex flex-col items-center justify-center text-center mx-auto px-5 sm:px-10"
      >
        {/* Profile Image */}
        <img
          src={ChandanProfile}
          alt="Chandan Profile"
          className="w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 rounded-full object-cover"
        />

        {/* Name */}
        <h1 className="text-white mt-6 text-2xl lg:text-5xl  md:text-4xl sm:text-3xl font-bold ">
          Chandan Kumar Chaudhary
        </h1>

        {/* Job Description */}
        <p className="sm:text-lg md:text-xl mt-2 text-zinc-400 text-base">
          ! Frontend Developer !
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4 mt-8 sm:flex-row ">
          <a href="mailto:chandankumad29@gmail.com">
            <button
              className="bg-[#1710f7] text-white font-semibold px-6 py-3 rounded-full
            hover:bg-transparent hover:border-[#1710f7]
            border-2 border-transparent transition-all duration-300"
            >
              Connect With Me
            </button>
          </a>

          <a href={ChandanResume} target="_blank">
            <button
              className="text-white font-semibold px-6 py-3 border-2 rounded-full
            hover:text-[#1710f7] transition"
            >
              Resume
            </button>
          </a>
        </div>

        {/* Social Media Icons */}
        <ul className="flex gap-x-6 sm:gap-x-10 mt-8">
          <li className="text-white">
            <a href="https://www.linkedin.com/in/chandan-ku/" target="_blank">
              <CiLinkedin className="w-7 h-7 sm:w-8 sm:h-8 hover:text-[#1710f7]" />
            </a>
          </li>
          <li className="text-white">
            <a href="https://github.com/Chandankumar682" target="_blank">
              <VscGithub className="w-7 h-7 sm:w-8 sm:h-8 hover:text-[#1710f7]" />
            </a>
          </li>
          <li className="text-white">
            <a href="mailto:chandankumad29@gmail.com" target="_blank">
              <TfiEmail className="w-7 h-7 sm:w-8 sm:h-8 hover:text-[#1710f7]" />
            </a>
          </li>
          <li className="text-white">
            <a href="https://www.instagram.com/ku_chandan_18?igsh=ZnNlN21rOHZudWc3" target="_blank">
              <FaInstagram className="w-7 h-7 sm:w-8 sm:h-8 hover:text-[#1710f7]" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Home;
