import React from "react";
import { projects } from "../data";
import { PinContainer } from "./ui/3d-pin";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading ">
        A small selection of{" "}
        <span className="text-purple">my recent projects</span>
      </h1>
      <div className="flex flex-wrap justify-center items-center p-4 gap-x-24 md:gap-y-16 mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title={project.pin_title} href={project.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <img
                  src={project.img}
                  alt={project.title}
                  className="absolute bottom-0 object-cover m-4 rounded-xl"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {project.title}
              </h1>
              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-3"
                style={{ margin: "1vh 0" }}
              >
                {project.des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {project.iconLists.map((icon, i) => (
                    <div
                      key={i}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * i + 2}px)` }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center gap-2">
                  <p className="flex lg:text-sm md:text-xs text-sm text-purple">
                    Check Github Repository
                  </p>
                  <img src="/github.png" alt="" width={15} height={15} />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
