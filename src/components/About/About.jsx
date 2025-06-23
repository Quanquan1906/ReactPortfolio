import { React } from "react";
import { getImageUrl } from "../../utils";
import { FaLaptopCode, FaProjectDiagram, FaPalette,  } from "react-icons/fa";
import { DiDatabase } from "react-icons/di";
export const About = () => {
  return (
    <section className="bg-gradient-to-r from-[#0A162E] to-[#1B3A6D] text-white py-20 px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold uppercase tracking-wide mb-4">
          About
        </h2>
        <div className="bg-[#1D253B] rounded-xl flex flex-row p-5 gap-8  ">
          <div className="hidden md:block flex-shrink-0 p-5">
            <img
              src={getImageUrl("about/aboutMe.png")}
              alt="about me"
              className="w-90 ml-3 h-auto rounded-xl cursor-pointer"
            />
          </div>
          <div className=" space-y-6 mt-4 ">

            {/* Card 1 */}
            <div className="p-4 flex items-start gap-4 shadow-lg">
              <FaLaptopCode className="text-blue-400 text-3xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">Frontend Developer</h3>
                <div className="text-gray-300 text-xl mt-1">
                  I’m a front-end developer with experience in building
                  responsive and optimized sites.
                </div>
              </div>
            </div>

             {/* Card 2 */}
            <div className="p-4 flex items-start gap-4 shadow-lg">
              <DiDatabase className="text-blue-400 text-4xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">Backend Developer</h3>
                <div className="text-gray-300 text-xl mt-1">
                  I have experience developing fast and optimised back-end system and APIs.
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-4 flex items-start gap-4 shadow-lg">
              <FaPalette className="text-blue-400 text-3xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">UI Designer</h3>
                <div className="text-gray-300 text-xl mt-1">
                  I design user interfaces that are not only visually appealing
                  but also user-friendly.
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-4 flex items-start gap-4 shadow-lg">
              <FaProjectDiagram className="text-blue-400 text-3xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">Project Coordinator</h3>
                <div className="text-gray-300 text-xl mt-1">
                   I coordinated team efforts, scheduled tasks, and ensured smooth communication in group projects, balancing both technical progress and deadlines.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
