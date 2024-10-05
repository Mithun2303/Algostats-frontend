import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Profile({name,course,rollNumber,role,problems}) {
  return (
    <div className="bg-blueGrey flex flex-col items-center justify-center w-[393px] h-[670px] rounded-xl">
      <div className="image">
        <Avatar className="h-[150px] w-[150px]">
          <AvatarImage src="https://github.com/shadcn.png" className="" />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="pt-6 text-center">
        <span className="font font-bold text-2xl text-white">Morty</span>
        <p className="text-white text-md font-poppins">
          {course} | {rollNumber} | {role}
        </p>
      </div>
      <div className="pt-5">
        <h3 className="text-2xl font-bold text-lightBlue mb-4">Recently Solved</h3>
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between gap-12 text-xl font-bold text-lightBlue">
            <span>Title</span>
            <span>Difficulty</span>
          </div>
          {problems.map((problem, index) => (
            <div className="flex justify-between gap-12" key={index}>
              <span className="text-white font-medium font-poppins w-48">
                {problem.title}
              </span>
              <span
                className={`text-gray-400 font-bold ${
                  problem.difficulty === "Easy"
                    ? "text-green-500"
                    : problem.difficulty === "Medium"
                    ? "text-yellow-300"
                    : problem.difficulty === "Hard"
                    ? "text-red-600"
                    : "text-white"
                }`}
              >
                {problem.difficulty}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
