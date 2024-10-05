import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Leaderboard() {
  const users = [
    { rank: 1, name: "Mithun", rollNo: "22PC19", course: "MSc CS", score: 100 },
    { rank: 2, name: "Mithun", rollNo: "22PC19", course: "MSc CS", score: 100 },
    { rank: 3, name: "Mithun", rollNo: "22PC19", course: "MSc CS", score: 90 },
    { rank: 4, name: "Mithun", rollNo: "22PC19", course: "MSc CS", score: 90 },
    { rank: 5, name: "Mithun", rollNo: "22PC19", course: "MSc CS", score: 80 },
    { rank: 6, name: "Mithun", rollNo: "22PC19", course: "MSc CS", score: 80 },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <div className="text-center text-pink-500 text-4xl font-bold">LEADERBOARD</div>

      <div className="flex justify-center mt-10 space-x-6">
        <div className="bg-gray-900 p-4 text-center rounded-lg w-40">
        <Avatar className="h-[95px] w-[95px] ml-5">
          <AvatarImage src="https://github.com/shadcn.png" className="" />
        </Avatar>
          <div className="text-pink-500 font-bold mt-4">Mithun</div>
          <div className="text-red-500 text-xl">100</div>
        </div>

        <div className="bg-gray-900 p-4 text-center rounded-lg w-60">
        <Avatar className="h-[120px] w-[120px] ml-10">
          <AvatarImage src="https://github.com/shadcn.png" className="" />
        </Avatar>
          <div className="text-pink-500 font-bold mt-4">Mithun</div>
          <div className="text-purple-500 text-3xl">300</div>
        </div>

        <div className="bg-gray-900 p-4 text-center rounded-lg w-40">
        <Avatar className="h-[65px] w-[65px] ml-8 mt-2">
          <AvatarImage src="https://github.com/shadcn.png" className="" />
        </Avatar>
          <div className="text-pink-500 font-bold mt-4">Mithun</div>
          <div className="text-orange-500 text-xl">50</div>
        </div>
      </div>

      <div className="mt-10 bg-gray-800 p-6 rounded-lg overflow-y-auto h-60">
        <div className="flex justify-between text-pink-500 font-semibold mb-2">
          <div>Rank</div>
          <div>Name</div>
          <div>Roll No</div>
          <div>Course</div>
          <div>Score</div>
        </div>

        {users.map((user, index) => (
          <div
            key={index}
            className="flex justify-between text-white bg-gray-900 p-2 mb-2 rounded-lg"
          >
            <div>{user.rank}</div>
            <div>{user.name}</div>
            <div>{user.rollNo}</div>
            <div>{user.course}</div>
            <div>{user.score}</div>
          </div>
        ))}
      </div>

      {/* Footer Dates */}
      <div className="flex justify-between mt-4">
        <div className="bg-pink-700 p-2 rounded-md">From: 02/10/24</div>
        <div className="bg-pink-700 p-2 rounded-md">To: 02/10/24</div>
      </div>
    </div>
  );
}

export default Leaderboard;
