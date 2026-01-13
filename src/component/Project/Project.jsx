import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// 👉 Project Images (apne assets ke naam ke hisab se rakhna)
import Calculator from "../../assets/Calculator.png";


// 👉 Tech Colors Map
const techColors = {
  HTML: "bg-orange-600/20 text-orange-400",
  CSS: "bg-blue-600/20 text-blue-400",
  JavaScript: "bg-yellow-600/20 text-yellow-400",
  React: "bg-cyan-600/20 text-cyan-400",
  Tailwind: "bg-sky-600/20 text-sky-400",
  MongoDB: "bg-green-600/20 text-green-400",
  Firebase: "bg-amber-600/20 text-amber-400",
  API: "bg-purple-600/20 text-purple-400",
  LocalStorage: "bg-pink-600/20 text-pink-400",
};

function Project() {

  // 👉 All Projects Data
  const projects = [
    {
      title: "Calculator App ( Mini Project )",
      description:
        "A simple calculator web app built using HTML, CSS, and JavaScript with live calculation.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: Calculator,
      live: "https://chandankumar682.github.io/Calculator1/",
      code: "https://github.com/Chandankumar682/Calculator1",
    },
    // {
    //   title: "Portfolio Website",
    //   description:
    //     "Personal portfolio website built using React and Tailwind CSS.",
    //   tech: ["React", "Tailwind"],
    //   image: PortfolioImg,
    //   live: "#",
    //   code: "#",
    // },
    // {
    //   title: "Weather App",
    //   description:
    //     "Weather application that shows real-time weather using API.",
    //   tech: ["JavaScript", "API", "CSS"],
    //   image: WeatherImg,
    //   live: "#",
    //   code: "#",
    // },
    // {
    //   title: "Chat Application",
    //   description:
    //     "Real-time chat application with authentication and messaging.",
    //   tech: ["React", "Firebase"],
    //   image: ChatImg,
    //   live: "#",
    //   code: "#",
    // },
    // {
    //   title: "ToDo App",
    //   description:
    //     "Simple task management app with CRUD operations.",
    //   tech: ["React", "LocalStorage"],
    //   image: TodoImg,
    //   live: "#",
    //   code: "#",
    // },
  ];

  return (
    <section id="Project">
      <div className="min-h-[calc(100svh-4rem)] max-w-[1400px] mx-auto px-5 sm:px-10 pt-20">

        {/* Heading */}
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-center mb-12">
          Projects
        </h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#111827] border border-gray-800 rounded-xl
              shadow-md hover:scale-[1.03] transition-transform duration-300
              flex flex-col overflow-hidden"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 sm:h-48 object-cover"
              />

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">

                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm sm:text-base mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-xs px-3 py-1 rounded-full ${
                        techColors[tech] || "bg-gray-600/20 text-gray-400"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-white
                    bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300
                    border border-gray-600 px-4 py-2 rounded-lg
                    hover:bg-gray-800 transition"
                  >
                    <FaGithub /> Code
                  </a>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Project;
