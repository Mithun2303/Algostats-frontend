import loginVector from "@/assets/Images/loginVector.webp";
export const Login = () => {
  return (
    <div className="w-screen h-dvh">
      <div className="flex justify-center  items-center h-full w-full md:flex-row flex-col space-y-10">
        <div className="md:w-1/2 w-full ">
          <img src={loginVector} alt="" className="" loading="eager"/>
        </div>
        <div className="flex md:w-1/2 w-full  gap-y-4  items-center flex-col">
          <div className="md:w-1/2 w-3/4">
            <span className="relative top-3 left-4 bg-white p-2 text-sm">Roll Number</span>
            <input
              type="text"
              name=""
              placeholder="Enter roll number"
              id=""
              className="rounded-xl w-full border-2 border-primary p-4"
            />
          </div>
          <div className="md:w-1/2 w-3/4">
            <span className="relative top-3 left-4 bg-white p-2 text-sm">Password</span>
            <input
              type="text"
              name=""
              placeholder="Enter password"
              id=""
              className="rounded-xl w-full border-2 border-primary p-4"
            />
          </div>
          <div className="md:w-1/2 w-3/4 flex justify-center">
            <button
              name=""
              id=""
              className="rounde-xl w-1/3 border-2 rounded-3xl bg-primary p-4 font-semibold text-white text-lg"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
