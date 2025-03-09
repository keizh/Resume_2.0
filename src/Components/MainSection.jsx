import React from "react";
import { Button } from "@material-tailwind/react";
import { Outlet } from "react-router-dom";
function MainSection({ visible, openHandler }) {
  return (
    <div className="py-[20px] pb-[80px] px-5 md:ml-[250px] md:w-[calc(100%-250px)]">
      <div className="rounded-xl min-h-[100vh] bg-white dark:bg-[#0A0A0A] p-4 text-white relative">
        <div className="absolute right-3 top-3">
          {visible && (
            <Button
              onClick={openHandler}
              className=" rounded-full p-6  bg-[#e0e0e0] dark:bg-black"
            >
              <div className="absolute  -translate-x-1/2 -translate-y-1/2  text-black dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </div>
            </Button>
          )}
        </div>

        <Outlet />
        <p className="font-nunito absolute -bottom-[50px] left-1/2 -translate-x-1/2 text-black dark:text-[#b0bec5]">
          @ 2025 Krishna Mulay
        </p>
      </div>
    </div>
  );
}

export default MainSection;
