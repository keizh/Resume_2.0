import React from "react";
import { Avatar, Typography } from "@material-tailwind/react";

function ContactMeComp() {
  return (
    <article className="p-5 rounded-lg border-[1px] border-[#37474f]">
      <p className="text-2xl sm:text-xl ">Want to connect ?</p>
      <p className="text-sm my-[10px] text-[#A3A3A3]">
        I'm eager to hear from employers and work on projects.
      </p>
      <div className="flex items-center gap-4 mt-[25px]">
        <div className="rounded-full bg-[#232017] border-[1px] border-[#4C452D] p-4">
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
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
        </div>
        <div>
          <Typography variant="h6" className="font-nunito">
            Email
          </Typography>
          <Typography variant="small" color="gray" className="font-nunito">
            krishnamulay50@gmail.com
          </Typography>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-[25px]">
        <div className="rounded-full bg-[#232017] border-[1px] border-[#4C452D] p-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-linkedin"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
          </svg>
        </div>
        <div>
          <Typography variant="h6" className="font-nunito">
            Linkedin
          </Typography>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/krishna-mulay-keizh/"
          >
            <Typography variant="small" color="gray" className="font-nunito">
              Click Here to connect : linkedin/krishna-mulay
            </Typography>
          </a>
        </div>
      </div>
    </article>
  );
}

export default ContactMeComp;
