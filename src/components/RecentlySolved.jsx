import { Card } from "./ui/card";

function RecentlySolvedCard({ className,recentlySolved }) {

  return (
    <Card
      className={`bg-glassbg p-8 h-fit rounded-lg text-white border-none shadow-lg mt-4 ${className}`}
    >
      <h3 className="text-2xl  font-bold text-center">Recently Solved</h3>
      <ul>
        <li className="flex justify-between font-semibold text-xl">
        <span>Title</span>
            <span>
              Difficulty
            </span>
        </li>
        {recentlySolved.map((problem, index) => (
          <li key={index} className="flex justify-between">
            <span className="truncate">{problem.name}</span>
            <span
              className={`${
                problem.difficulty === "EASY"
                  ? "text-green-400"
                  : problem.difficulty === "MEDIUM"
                    ? "text-yellow-400"
                    : "text-red-400"
               } font-semibold`}
            >
              {problem.difficulty}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default RecentlySolvedCard;
