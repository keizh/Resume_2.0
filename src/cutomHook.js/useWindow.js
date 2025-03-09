import { useState, useEffect } from "react";

const useWindow = () => {
  const [xy, setXY] = useState({ x: window.innerWidth, y: innerHeight });

  const handler = () => setXY({ x: window.innerWidth, y: innerHeight });

  useEffect(() => {
    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  });

  return xy;
};

export default useWindow;
