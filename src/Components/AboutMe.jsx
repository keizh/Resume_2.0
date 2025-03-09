import React from "react";
import { NavLink } from "react-router-dom";

const Skills = [
  "React JS",
  "Javascript",
  "HTML",
  "CSS",
  "TailwindCSS",
  "Redux-toolkit",
  "Context API",
  "NodeJS",
  "MongoDB",
  "Cloudinary",
  "HTTP Server",
  "WEB SOCKET Server",
];

function AboutMe() {
  return (
    <main className="max-w-[700px] mx-auto mb-[50px]">
      <div className="pt-[30px]">
        <div className="flex justify-between flex-wrap">
          <article className="font-nunito sm:w-[55%] ">
            <p className=" text-3xl sm:text-4xl md:text-4xl font-bold">
              Hello! I’m Krishna
            </p>
            <p className="text-3xl  sm:text-4xl font-bold text-[#fbc02d]">
              Fullstack Developer
            </p>
            <div className="max-w-[200px] mt-4 my-2 mx-auto rounded-md overflow-hidden  sm:hidden">
              <img
                className="scale-x-[1.15] scale-y-[1.1]"
                src="https://media.licdn.com/dms/image/v2/D4D03AQHxGNKUQh_KFA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714676873188?e=1746662400&v=beta&t=PyqeExjxdhDnkJWs7dviHSQeGQJeronwBALKJET443Q"
              />
            </div>
            <section className="pt-[20px] text-[#A3A3A3] text-sm flex flex-col gap-5">
              <p>
                Hi, I'm Krishna Mulay, a full-stack developer with a strong
                focus on frontend development, actively seeking new
                opportunities in both frontend and full-stack roles.
              </p>
              <p>
                I graduated from D.Y. Patil University in 2024 and have hands-on
                experience with a variety of web technologies, including React,
                JavaScript, CSS, HTML, Tailwind CSS, Redux, Context API,
                MongoDB, Mongoose, and Node.js.
              </p>
              <p>
                {" "}
                I'm constantly expanding my skill set, currently diving into
                Next.js, PostgreSQL, and cloud deployment on AWS to enhance my
                web development expertise. Throughout my journey, I've worked on
                several projects that allowed me to put these skills into
                practice.
              </p>
              <NavLink
                to="/projects"
                className="underline underline-offset-4 flex items-center gap-2 text-[#fbc02d]"
              >
                <span>View My Projects </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </NavLink>
            </section>
          </article>
          <div className="w-[40%] mt-[20px] rounded-md overflow-hidden hidden sm:block">
            <img
              className="scale-x-[1.15] scale-y-[1.1]"
              src="https://media.licdn.com/dms/image/v2/D4D03AQHxGNKUQh_KFA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714676873188?e=1746662400&v=beta&t=PyqeExjxdhDnkJWs7dviHSQeGQJeronwBALKJET443Q"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-[30px]">
          {Skills.map((ele, index) => (
            <div
              key={index}
              className=" bg-[#232017] border-[1px] border-[#4C452D] py-4 rounded-md flex justify-center items-center"
            >
              <span className="font-nunito  text-[#A3A3A3] ">{ele}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default AboutMe;
