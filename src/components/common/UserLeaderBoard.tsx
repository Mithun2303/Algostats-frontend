import crown from "@/assets/Icons/crown.svg";
// import "@/index.css"
export const UserLeaderBoard = (props: {
  position: number;
  leaderBoard: string;
}) => {
  return (
    <div
      className={`min-w-fit md:mx-0 mx-10  px-10 pt-10 flex flex-col items-center justify-center  max-md:bg-awhite rounded-[35px] max-md:drop-shadow-light`}
    >
      <img src={crown} alt="" className="fill-primary" />
      <div className="relative">
        <span className="text-[120px] text-primary  relative -top-12 special ">
          {props.position}
        </span>
      </div>
      <div className="flex flex-col text-center relative -top-10 ">
        <span className="text-4xl  font-bold text-primary">
          {props?.leaderBoard == "CLASS"
            ? "Class Wise"
            : props?.leaderBoard == "BATCH"
            ? "Batch Wise"
            : "Overall"}
        </span>
        {/* <span className="text-md font-medium text-primary">Leaderboard</span> */}
      </div>
    </div>
  );
};
