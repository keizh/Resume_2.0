import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import ClipboardWithTooltip from "../Components/Copy";
import { NavLink } from "react-router-dom";
import ContactMeComp from "../Components/ContactMeComp";

function HomePage() {
  return (
    <div className="max-w-[700px] mx-auto">
      <div className="pt-[30px]">
        {/* intro */}
        <p className="font-nunito text-3xl sm:text-4xl md:text-4xl font-bold text-black dark:text-white">
          Hello! I’m Krishna
        </p>
        <div className="flex flex-row flex-wrap  gap-2 sm:gap-4 font-nunito  dark:text-[#e0e0e0]">
          <p className="text-3xl  sm:text-4xl font-bold text-[#fbc02d]">
            Fullstack Developer
          </p>
          <p className="text-black dark:text-white w-fit border-[1px] border-[#E5E5E5] dark:border-[#546e7a]   px-2 py-1  flex items-center gap-2 text-2xl border-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 sm:size-7 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <span>India</span>
          </p>
        </div>
        {/* description */}
        <p className="font-nunito my-[40px] mb-[50px] text-[#A3A3A3]">
          Full-stack Frontend developer focused on creating exceptional user
          experiences with React. Skilled in building intuitive and efficient
          web applications, with hands-on experience in both frontend and
          backend development.
        </p>
        {/* resume and copy email */}
        <div className="flex flex-col items-center sm:flex-row gap-5 flex-wrap aspect-1/1">
          <a
            href="https://res.cloudinary.com/dddkhewor/image/upload/v1740654307/Resume_xepwkk.pdf"
            target="_blank"
          >
            <Button className="bg-[#fbc02d] text-black font-nunito flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                />
              </svg>
              Download Resume
            </Button>
          </a>
          <ClipboardWithTooltip txt={"krishnamulay50@gmail.com"} />
          {/* <Button>About Me</Button> */}
        </div>
        <div className="my-[50px] flex justify-between">
          <p className="font-nunito font-medium text-2xl text-black dark:text-white">
            Selected Work
          </p>
          <NavLink
            to="/projects"
            className="underline underline-offset-4 flex items-center gap-2 text-[#fbc02d]"
          >
            <span className="font-bold dark:font-medium">View All </span>

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
        </div>
        <NavLink className={"block mb-[30px]"} to="/project/1">
          <img
            className="rounded-xl"
            src="https://res.cloudinary.com/dddkhewor/image/upload/fl_preserve_transparency/v1740583782/Screenshot_2025-02-26_205832_l5ex75.jpg?_s=public-apps"
          />
          <p className="font-nunito font-bold mt-[10px] text-center text-black dark:text-white">
            WYM (Watch Your Movie)
          </p>
        </NavLink>
        <NavLink className={"block"} to="/project/6">
          <img
            className="rounded-xl "
            src="https://res.cloudinary.com/dddkhewor/image/upload/v1740595590/Screenshot_2025-02-26_205832_wouggb.png"
          />
          <p className="font-nunito font-bold mt-[10px] text-center text-black dark:text-white">
            Lets Chat
          </p>
        </NavLink>
        <div className="my-[50px]">
          <ContactMeComp />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
