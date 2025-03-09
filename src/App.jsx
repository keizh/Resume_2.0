import { useEffect, useState } from "react";
import useWindow from "./cutomHook.js/useWindow";
import MobileOverlay from "./Components/MobileOverlay";
import SideBar from "./Components/SideBar";
import MainSection from "./Components/MainSection";

export default function App() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const openHandler = () => setOpen((open) => !open);
  const xy = useWindow();

  useEffect(() => {
    if (xy.x > 720) {
      setOpen(true);
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [xy]);

  return (
    <div className="bg-[#262626] min-h-screen">
      {/* mobile mode */}
      <MobileOverlay openHandler={openHandler} open={open} />
      {/* side bar */}
      <SideBar open={open} />

      <MainSection visible={visible} openHandler={openHandler} />
    </div>
  );
}
