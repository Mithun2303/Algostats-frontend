import { Outlet } from "react-router-dom";
import { Navbar } from "../common/Navbar";

const Layout = () => {
  return (
    // <div className="w-dvw h-svh">
    //   <div className="w-dvw  h-[85%]">
    //     <Outlet />
    //   </div>
    //   <div className=" h-[15%] z-50 float top-[85vh] flex justify-center w-dvw">
    //     <Navbar />
    //   </div>
    // </div>

    <div className="w-dvw h-dvh relative">
      <div className="w-full h-full">
        <Outlet />
      </div>
      <div className="fixed bottom-5 w-full flex md:px-12 md:py-5 justify-center items-center">
        <Navbar />
      </div>
    </div>

    // <div className="flex flex-col w-full h-screen  justify-between items-center lg:overflow-hidden">
    //   <div className=" lg:flex w-full gap-4 h-[92vh] lg:h-5/6 overflow-auto">
    //     <div className="lg:w  lg:flex h-full b overflow-auto w-full">
    //       <Outlet />
    //     </div>
    //   </div>
    //   <div className=" h-[8vh] lg:h-1/6 py-12 bg-[#171717] w-full  items-center    flex justify-center">
    //     <NavBar />
    //   </div>
    // </div>
  );
};

export default Layout;
