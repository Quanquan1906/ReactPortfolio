import { React } from 'react';
import { getImageUrl } from '../../utils';
const skillsData = [
  { name: 'HTML', level: 75 },
  { name: 'CSS', level: 70 },
  { name: 'JavaScript', level: 50 },
  { name: 'Python', level: 40 },
];
const frameworksData = [
  { name: 'React', img: getImageUrl('skills/react.png') },
  { name: 'Node.js', img: getImageUrl('skills/node.png') },
  { name: 'Figma', img: getImageUrl('skills/figma.png') },
  { name: 'Tailwind CSS', img: getImageUrl('skills/tailwind.png') },
];

export const Skills = () => {
  return (
    <section className=" bg-gradient-to-r from-[#0A162E] to-[#1B3A6D] text-white py-22 px-10" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold uppercase tracking-wide mb-4">SKILLS</h2>
        <div className="bg-[#1D253B] rounded-xl flex flex-col p-5 gap-8">
          <div className="text-gray-300 text-xl mt-1">
            These are the languages I have acquired throughout my journey in technology and software development.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
            {skillsData.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-sm text-gray-300">{skill.name}</span>
                  <span className="text-sm text-gray-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-300 h-2 rounded-full">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="text-xl text-white mb-4">
              The technologies I have used throughout my journey in software engineering, from frontend development to
              backend services and UI design.
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center">
              {frameworksData.map((framework) => (
                <div key={framework.name} className="flex flex-col items-center">
                  <img src={framework.img} alt={framework.name} className="w-12 h-12 mb-2 object-contain" />
                  <span className="text-sm text-gray-300">{framework.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
