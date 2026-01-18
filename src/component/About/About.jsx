import React from "react";
import ChandanProfile from "../../assets/ChandanProfile.jpg";

function About() {
  return (
    <section id="About" className="scroll-mt-24">
      <div className="max-w-[1100px] flex flex-col mx-auto sm:px-10  pt-14 px-5 items-center">
        {/* Section Heading */}
        <h1 className="uppercase text-white sm:text-3xl text-2xl md:text-4xl font-bold mb-6">
          About Me
        </h1>

        <div className="flex flex-col items-center md:flex-row md:gap-16 gap-10">
          {/* Image */}
          <img
            src={ChandanProfile}
            alt="Chandan Profile"
            className="w-48 sm:w-56 h-48 sm:h-56 md:w-72 md:h-72 rounded-2xl object-cover"
          />

          {/* Content */}
          <div className="flex flex-col gap-y-4 text-center md:text-left">
            <h2 className="text-white text-xl sm:text-2xl">
              Hi, I'm{" "}
              <span className="text-indigo-400 font-bold">
                Chandan Kumar Chaudhary
              </span>
            </h2>

            <p className="text-indigo-300 sm:text-xl text-lg font-semibold">
              Frontend Developer
            </p>

            <p className="text-zinc-400 sm:text-lg text-base leading-relaxed">
              I am a frontend developer focused on building responsive and
              user-friendly web interfaces using HTML, CSS, JavaScript, React,
              and Tailwind CSS. I enjoy creating real-world projects and
              continuously improving my frontend skills, while currently
              learning full stack development.
            </p>

            <p className="text-zinc-300 sm:text-base text-sm">
              <span className="text-indigo-400 font-semibold">Email:</span>{" "}
              Chandankumad29@gmail.com
            </p>

            <p className="text-zinc-300 text-sm sm:text-base">
              <span className="text-indigo-400 font-semibold">Address:</span>{" "}
              Garhwa, Jharkhand, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
