import { React } from "react";
import { getImageUrl } from "../../utils";
import { FaLaptopCode, FaServer, FaPalette } from "react-icons/fa";

export const About = () => {
  return (
    <section className = "bg-gradient-to-r from-[#0A162E] to-[#1B3A6D] text-white py-20 px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold uppercase tracking-wide">About</h2>
      <div className="bg-[#1D253B] border border-gray-500/30 rounded-xl flex ">
      <div className= "flex-shrink-0 p-5">
        <img src={getImageUrl("about/aboutMe.png")} alt="about me" className="w-60 ml-3 h-auto rounded-xl " />
      </div>
      <div className=" space-y-6">
        {/* Card 1 */}
            <div className="p-4 flex items-start gap-4 shadow-lg">
              <FaLaptopCode className="text-blue-400 text-3xl mt-1 flex-shrink-0 " />
              <div>
                <h3 className="text-lg font-semibold">Frontend Developer</h3>
                <p className=" text-gray-300">
                  I’m a front-end developer with experience in building responsive and optimized sites.
                </p>
              </div>
            </div>
            <div>
              {/* Card 2 */}
              <div className="p-4 flex items-start">
              <FaPalette className="text-blue-400 text-3xl" />
              <h3 className="text-lg font-semibold">UI Designer</h3>
            </div>
            </div>

      </div>
      </div> 
      </div>
    </section>
  );
};
