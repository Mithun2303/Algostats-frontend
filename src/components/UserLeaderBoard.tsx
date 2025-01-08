import crown from "@/assets/Images/crown.svg";
// import "@/index.css"
export const UserLeaderBoard = (props: {
  position: number;
  leaderBoard: string;
}) => {
  return (
    <div className="md:w-[30%] m-10 flex flex-col items-center py-8  bg-awhite rounded-[35px] drop-shadow-light h-[35vh]">
      <img src={crown} alt="" className="fill-primary" />
      <div className="relative">
        <span className="text-[120px] text-primary  relative -top-12 special ">
          {props.position}
        </span>
      </div>
      <div className="flex flex-col text-center relative -top-10 ">
        <span className="text-4xl font-bold text-primary">
          {props?.leaderBoard == "CLASS"
            ? "Class Wise"
            : props?.leaderBoard == "BATCH"
            ? "Batch Wise"
            : "Overall"}
        </span>
        <span className="text-md font-medium text-primary">Leaderboard</span>
      </div>
    </div>
  );
};
