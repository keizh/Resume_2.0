import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { data } from "./data";
import ContactMeComp from "./ContactMeComp";
function ProjectComp() {
  const { id } = useParams();

  const obj = data.find((ele) => ele.id == id);
  const others = data.filter((ele) => ele.id != id).slice(0, 2);

  return (
    <div className="max-w-[700px] mx-auto">
      <div className="pt-[30px]  font-nunito">
        <NavLink
          to="/projects"
          className="flex gap-2 font-nunito  p-2  inline-block pointer border-b-2  dark:border-b-[1px] border-[#E5E5E5] dark:border-[#37474f]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#A3A3A3"
            className="size-6 text-[#A3A3A3]]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          <span className="text-[#A3A3A3]"> Back to List </span>
        </NavLink>
        <p className="font-nunito text-2xl sm:text-3xl  font-bold mt-[50px] text-black dark:text-white">
          {obj.name}
        </p>
        <img src={obj.url} className="rounded-xl mt-[30px] " />
        <div className="my-[20px]">
          <a
            target="_blank"
            href={obj.link != "" ? obj.link : "#"}
            className={`flex gap-2 bg-[#FBC02D] ${
              obj.link != "" ? "" : "opacity-25 pointer-events-none"
            } rounded-lg p-2 w-fit items-center`}
          >
            <span className="text-black font-nunito text-xs  font-bold pointer">
              Preview
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="size-4 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
              />
            </svg>
          </a>
          {obj.alert && (
            <p className="mt-[12px] text-[10px] text-red-700 flex items-center gap-2">
              {" "}
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
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
              <span> {obj.alert}</span>
            </p>
          )}
          {obj.link == "" && (
            <a
              target="_blank"
              href={obj.vlink}
              className={`flex gap-2 bg-[#4caf50] rounded-lg p-2 w-fit items-center mt-[10px]`}
            >
              <span className="text-white font-nunito text-xs  font-bold pointer">
                Preview
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="size-4 text"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </a>
          )}
          {obj.link == "" && (
            <p className="mt-[12px] text-[10px] text-green-700 flex items-center gap-2">
              {" "}
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
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
              <span> {obj.vDesc}</span>
            </p>
          )}
        </div>
        <p className="text-xl sm:text-4xl md:text-2xl font-bold text-black dark:text-white">
          Key Features:{" "}
        </p>
        <ul className="list-disc marker:text-[A3A3A3] mt-[20px] ml-[15px]">
          {obj.description.map((ele) => (
            <li className="text-xs text-[#A3A3A3] py-1">{ele}</li>
          ))}
        </ul>
        <div className="my-5 grid gap-2 grid-cols-1 sm:grid-cols-2">
          <a
            href={obj.frontendGH}
            target="_blank"
            // style={{
            //   border: "1px solid #37474f",
            // }}
            className="rounded p-2 block text-center text-black dark:text-white hover:bg-[#F5F5F5] dark:hover:bg-[#262626] flex items-center justify-center gap-3 border-[1px] border-[#E5E5E5] dark:border-[#37474f]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
            <span className="text-black dark:text-white">Frontend code</span>
          </a>
          <a
            href={obj.backendGH || "#"}
            target="_blank"
            // style={{
            //   border: "1px solid #37474f",
            // }}
            className={`rounded p-2 block text-center text-black dark:text-white hover:bg-[#F5F5F5] dark:hover:bg-[#262626]  flex items-center justify-center gap-3 ${
              obj.backendGH == "" ? "pointer-events-none  opacity-75" : ""
            } border-[1px] border-[#E5E5E5] dark:border-[#37474f]`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
            <span>Backend code</span>
          </a>
        </div>
        <div
          style={{
            marginBlock: "60px",
          }}
          className="border-b-[1px] border-[#E5E5E5] dark:border-[#37474f]"
        />
      </div>
      <section>
        <p className="text-2xl font-bold font-nunito text-black dark:text-white">
          Expore More Projects
        </p>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 mb-[60px] mt-[40px]">
        {others.map((ele, index) => (
          <NavLink ele={index} className={"block"} to={`/project/${ele.id}`}>
            <div className="w-full sm:aspect-square  ">
              <img
                className="w-full h-full object-cover rounded-xl border-[1px] overflow-hidden border-[#37474f]"
                src={ele.url}
              />
            </div>
            <p className="font-nunito font-bold mt-[10px] text-center">
              {ele.name}
            </p>
          </NavLink>
        ))}
      </section>
      <NavLink
        to="/projects"
        style={{
          border: "1px solid #37474f",
        }}
        className="rounded p-2 block text-center text-black dark:text-white hover:bg-[#F5F5F5] dark:hover:bg-[#262626] border"
      >
        All projects
      </NavLink>
      <div className="my-[50px]">
        <ContactMeComp />
      </div>
    </div>
  );
}

export default ProjectComp;
