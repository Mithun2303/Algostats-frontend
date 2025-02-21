import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import primarySettingsIcon from "@/assets/Icons/primarySettings.svg";
import settingsIcon from "@/assets/Icons/Settings.svg";
import useWindowDimensions from "@/hooks/useWindowDimension";
import { useNavigate } from "react-router-dom";
import { ReactRoutes } from "@/constants/constants";
export const Navbar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState<number>(0);
  const windowSize = useWindowDimensions();

  useEffect(() => {
    if (active == 0) {
      navigate(ReactRoutes.HOME);
    } else if (active == 1) {
      navigate(ReactRoutes.SEARCH);
    } else if (active == 2) {
      navigate(ReactRoutes.SETTINGS);
    }
  }, [active]);

  return (
    // <div className="w-dvw h-dvh flex justify-center items-end py-8">
    <div className="w-2/3 md:w-1/2 h-full p-2 flex justify-evenly items-center bg-primary rounded-full">
      <div className="flex items-center h-full" onClick={() => setActive(0)}>
        {active == 0 ? (
          <div className="w-full flex items-center p-2 rounded-full bg-[rgba(183,176,225,1)]">
            <FaHome className="w-10 h-7 fill-primary" />
            <span className="text-primary">Home</span>
          </div>
        ) : windowSize.width > 765 ? (
          <div className="w-full flex items-center p-2 rounded-full ">
            <FaHome className="w-10 h-7 fill-white" />
            <span className="text-white">Home</span>
          </div>
        ) : (
          <FaHome className="w-12 h-7 fill-white" />
        )}
      </div>
      <div
        className="flex justify-center items-center h-full"
        onClick={() => setActive(1)}
      >
        {active == 1 ? (
          <div className="w-full flex items-center p-2 rounded-full bg-[rgba(183,176,225,1)]">
            <CiSearch className="w-8 h-7 fill-primary" />
            <span className=" text-primary">Search</span>
          </div>
        ) : windowSize.width > 765 ? (
          <div className="w-full flex items-center p-2 rounded-full ">
            <CiSearch className="w-10 h-7 fill-white" />
            <span className="text-white">Search</span>
          </div>
        ) : (
          <CiSearch className="w-12 h-7 fill-white" />
        )}
      </div>
      <div className="flex items-center h-full" onClick={() => setActive(2)}>
        {active == 2 ? (
          <div className="w-full flex items-center p-2 rounded-full bg-[rgba(183,176,225,1)]">
            <img src={primarySettingsIcon} className="w-8 h-7" />
            <span className=" text-primary">Settings</span>
          </div>
        ) : windowSize.width > 765 ? (
          <div className="w-full flex items-center p-2 rounded-full ">
            <img src={settingsIcon} className="w-10 h-7 fill-white" />
            <span className="text-white">Settings</span>
          </div>
        ) : (
          <img src={settingsIcon} className="w-12 h-7 fill-white" />
        )}
      </div>
    </div>
    // </div>
  );
};
