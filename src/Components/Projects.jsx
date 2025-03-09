import React from "react";
import ContactMeComp from "../Components/ContactMeComp";
import { data } from "../Components/data";
import { NavLink } from "react-router-dom";

function Projects() {
  return (
    <div className="max-w-[700px] mx-auto">
      <div className="pt-[30px] font-nunito ">
        <p className="text-3xl sm:text-4xl md:text-4xl font-bold">Projects</p>
        <p className="mt-[25px] mb-[60px] text-[#A3A3A3]">
          {/* #eceff1 */}
          Explore cutting-edge design innovations that transform ideas into
          reality
        </p>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 mb-[60px]">
          {data.map((ele, index) => (
            <NavLink ele={index} className={"block"} to={`/project/${ele.id}`}>
              <div className="w-full sm:aspect-square overflow-hidden rounded-xl">
                <img className="w-full h-full object-cover" src={ele.url} />
              </div>
              <p className="font-nunito font-bold mt-[10px] text-center">
                {ele.name}
              </p>
            </NavLink>
          ))}
        </section>
        <div className="mb-[50px]">
          <ContactMeComp />
        </div>
      </div>
    </div>
  );
}

export default Projects;
