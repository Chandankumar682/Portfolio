import React from "react";
import ChandanProfile from "../../assets/ChandanProfile.jpg";

function About() {
  return (
    <section id="About" className="scroll-mt-24">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-10 flex flex-col items-center pt-14">


        {/* Section Heading */}
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-6">
          About Me
        </h1>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          {/* Image */}
          <img
            src={ChandanProfile}
            alt="Chandan Profile"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-2xl object-cover"
          />

          {/* Content */}
          <div className="flex flex-col gap-y-4 text-center md:text-left">

            <h2 className="text-white text-xl sm:text-2xl">
              Hi, I'm{" "}
              <span className="text-indigo-400 font-bold">
                Chandan Kumar Chaudhary
              </span>
            </h2>

            <p className="text-indigo-300 text-lg sm:text-xl font-semibold">
              Frontend Developer
            </p>

            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              I am a frontend developer focused on building responsive and user-friendly web interfaces using HTML, CSS, JavaScript, React, and Tailwind CSS.
I enjoy creating real-world projects and continuously improving my frontend skills, while currently learning full stack development.
            </p>

            <p className="text-zinc-300 text-sm sm:text-base">
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
