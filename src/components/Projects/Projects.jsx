import React from 'react';
import { getImageUrl } from '../../utils';
const projects = [
  {
    title: 'Project A',
    description: 'This is a project made to learn the latest languages by building an app.',
    image: getImageUrl('projects/project.png'),
    technologies: ['React', 'Express', 'Node'],
    demoUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Project B',
    description: 'This is a project made to learn the latest languages by building an app.',
    image: getImageUrl('projects/project.png'),
    technologies: ['React', 'Express', 'Node'],
    demoUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Project C',
    description: 'This is a project made to learn the latest languages by building an app.',
    image: getImageUrl('projects/project.png'),
    technologies: ['React', 'Express', 'Node'],
    demoUrl: '#',
    sourceUrl: '#',
  },
];
export const Projects = () => {
  return (
    <section className="bg-gradient-to-r from-[#0A162E] to-[#1B3A6D] text-white py-22 px-10" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold uppercase tracking-wide mb-4">PROJECTS</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1D253B] rounded-2xl shadow-lg overflow-hidden flex flex-col justify-between"
            >
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />

              <div className="p-5 flex flex-col gap-3 flex-grow">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-[#2C3654] text-white text-xs px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between px-5 pb-5 pt-2 gap-4">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-indigo-600"
                >
                  Demo
                </a>
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-indigo-600"
                >
                  Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
