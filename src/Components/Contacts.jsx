import React from "react";
import ContactMeComp from "../Components/ContactMeComp";

function Contacts() {
  return (
    <div className="max-w-[700px] mx-auto">
      <div className="pt-[30px] font-nunito ">
        <p className="text-3xl sm:text-4xl md:text-4xl font-bold">Contacts</p>
        <p className="mt-[25px] mb-[60px] text-[#A3A3A3]">
          {/* #eceff1 */}
          I'm the candidate you have been looking for — let's create something
          amazing together!
        </p>
        <ContactMeComp />
      </div>
    </div>
  );
}

export default Contacts;
