import React from "react";

function Skill() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Java",
    "SQL",
    "Git & GitHub",
  ];

  return (
    <section id="Skill" className="py-16">

      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 py-10 flex flex-col items-center">

        {/* Heading */}
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-8">
          Skills
        </h1>

        {/* Skill Box */}
        <div
          className="w-full max-w-4xl backdrop-blur-md bg-[#111837]/90
          border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-md"
        >
          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="text-center text-white border border-blue-500/30
                rounded-lg py-3 hover:bg-blue-500/10
                transition-all duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skill;
