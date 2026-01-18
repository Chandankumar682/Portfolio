import { FaArrowUp } from "react-icons/fa";

export default function Education() {
  return (
    <section id="Education">
      <div className="min-h-[calc(100svh-4rem)] max-w-[1400px] mx-auto px-5 sm:px-10 pt-40 flex flex-col items-center">

        {/* Heading */}
        <h1 className="text-white md:text-4xl sm:text-3xl text-2xl font-bold uppercase mb-12">
          Education
        </h1>
        
        <div className="flex flex-col w-full max-w-[800px] items-center gap-6">
          {/* B.Tech */}
          <div
            className="flex flex-col w-full items-center text-center
             backdrop-blur-md bg-[#111837]/90 shadow-md p-6
            border border-blue-500/30 rounded-lg hover:scale-[1.02] transition-all duration-300"
          >
            <h2 className="text-white/90 text-lg sm:text-xl font-bold">
              Technocrats Institute of Technology, Bhopal
            </h2>
            <p className="text-white/60 mt-1 text-sm sm:text-base">
              Bachelor of Technology | CSE - AIML
            </p>
            <p className="text-white/60 mt-1 text-sm sm:text-base">
              YOP : 2021 - 2025
            </p>
            <p className="text-white/60 mt-1 text-sm sm:text-base">
              CGPA : 8.09
            </p>
          </div>

          <FaArrowUp className="text-white/70 text-xl" />

          {/* 12th */}
          <div
            className="flex flex-col w-full items-center text-center
             backdrop-blur-md bg-[#111837]/90 shadow-md p-6
            border border-blue-500/30 rounded-lg hover:scale-[1.02] transition-all duration-300"
          >
            <h2 className="text-white/90 text-lg sm:text-xl font-bold">
              RK +2 High School Lalgarh Palamu (JAC)
            </h2>
            <p className="text-white/60 mt-1 text-sm sm:text-base">
              Senior Secondary (Class XII) | Science Stream
            </p>
            <p className="text-white/60 mt-1 text-sm sm:text-base">
              Percentage : 74.6%
            </p>
            <p className="text-white/60 mt-1 text-sm sm:text-base">
              YOP : 2019 - 2021
            </p>
          </div>

          <FaArrowUp className="text-white/70 text-xl" />

          {/* 10th */}
          <div
            className="flex flex-col w-full items-center text-center
             backdrop-blur-md bg-[#111837]/90 shadow-md p-6
            border border-blue-500/30 rounded-lg hover:scale-[1.02] transition-all duration-300"
          >
            <h2 className="text-white/90 text-lg sm:text-xl font-bold">
              High School Kikra Danda (JAC)
            </h2>
            <p className="text-white/60 mt-1 text-sm sm:text-base">
              Secondary (Class X)
            </p>
            <p className="text-white/60 mt-1 text-sm sm:text-base">
              Percentage : 72.20%
            </p>
            <p className="text-white/60 mt-1 text-sm sm:text-base">
              YOP : 2018 - 2019
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
