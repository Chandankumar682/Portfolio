import React from "react";
import PortfolioResult from "../../assets/portfolio-result.png";
import ChatHubResult from "../../assets/ChatHubResult.png";
import ChatBoatResult from "../../assets/ChatBoatResult.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Tech Colors
const techColors = {
  HTML: "bg-orange-600/20 text-orange-400",
  CSS: "bg-blue-600/20 text-blue-400",
  JavaScript: "bg-yellow-600/20 text-yellow-400",
  React: "bg-cyan-600/20 text-cyan-400",
  Tailwind: "bg-sky-600/20 text-sky-400",
  MongoDB: "bg-green-600/20 text-green-400",
  Firebase: "bg-pink-600/20 text-pink-400",
  Cloudinary: "bg-indigo-600/20 text-indigo-400",
  GeminiAPI: "bg-purple-600/20 text-purple-400",
};


function Project() {

  // All Projects Data
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A responsive personal portfolio website built using React and Vite to showcase my skills, projects, education, and contact details.",
      tech: ["HTML", "Tailwind", "JavaScript", "React"],
      image: PortfolioResult,
      live: "#",
      code: "#",
    },
    {
      title: "ChatHub ( Realtime Chat Application )",
      description:
        "A real-time chat application built using React, HTML5, CSS3, and JavaScript, with Firebase for authentication and real-time messaging, and Cloudinary for image upload and media storage.",
      tech: ["HTML", "CSS", "JavaScript", "React", "Firebase", "Cloudinary"],
      image: ChatHubResult,
      live: "#",
      code: "#",
    },
    {
      title: "AI Chatbot Web App like ( ChatGPT )",
      description:
        "An AI-powered chatbot web application built with React and Google Gemini API. It supports real-time conversations, chat history management, multiple chat sessions, and dark/light mode with a clean and responsive UI.",
      tech: ["HTML", "CSS", "JavaScript", "React", "GeminiAPI"],
      image: ChatBoatResult,
      live: "https://chandankumar682.github.io/ChatBoat/",
      code: "https://github.com/Chandankumar682/ChatBoat",
    },
  ];

  return (
    <section id="Project">
      <div className="min-h-[calc(100svh-4rem)] max-w-[1400px] mx-auto px-5 sm:px-10 pt-20">
        {/* Heading */}
        <h1 className="text-white uppercase text-center mb-12 text-2xl sm:text-3xl md:text-4xl font-bold">
          Projects
        </h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col bg-[#111827] border border-gray-800 rounded-xl
              shadow-md hover:scale-[1.03] transition-transform duration-300 overflow-hidden"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 sm:h-48 object-cover"
              />

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="mb-2 text-lg sm:text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className=" text-sm sm:text-base mb-4 text-gray-400 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-xs px-3 py-1 rounded-full ${techColors[tech] || "bg-gray-600/20 text-gray-400"}`}
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
