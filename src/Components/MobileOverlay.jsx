import React from "react";

function MobileOverlay({ openHandler, open }) {
  return (
    <div
      onClick={openHandler}
      className={`${open ? "opacity-50 visible" : "opacity-0 invisible"} 
  fixed inset-0 bg-black transition-opacity duration-300 ease-in-out z-10 md:hidden`}
    ></div>
  );
}

export default MobileOverlay;
