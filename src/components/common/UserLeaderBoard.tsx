import crown from "@/assets/Icons/crown.svg";
// import "@/index.css"


type leaderboardentry = {
  rank: number;
  name: string;
  score: number;
};


export const UserLeaderBoard = (props: {
  position: number;
  leaderBoard: string;
  leaderBoardData : leaderboardentry[]
}) => {

  return (
    <div className="min-w-fit px-10 m-5 pt-10 mx-10 flex flex-col items-center justify-center bg-awhite rounded-[35px] drop-shadow-light">
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

      <div className="w-full rounded mt-5 mb-5">
        <div className="bg-gray-200 rounded-lg shadow-md">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="text-center text-primary font-semibold border-gray ">
                <th className="p-2 border border-gray-400">Rank</th>
                <th className="p-2 border border-gray-400">Name</th>
                <th className="p-2 border border-gray-400">Score</th>
              </tr>
            </thead>
            <tbody>
              {props.leaderBoardData.map((entry, index) => (
                <tr key={index} className="text-center border-t">
                  <td className="p-2 border border-gray-400">{entry.rank}</td>
                  <td className="p-2 border border-gray-400">{entry.name}</td>
                  <td className="p-2 border border-gray-400">{entry.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
