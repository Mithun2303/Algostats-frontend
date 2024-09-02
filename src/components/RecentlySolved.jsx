import { Card } from './ui/card';

function RecentlySolvedCard() {
  const problems = [
    { title: 'Two Sum', difficulty: 'Easy' },
    { title: 'Add Two Numbers', difficulty: 'Hard' },
    { title: 'Reverse Integer', difficulty: 'Medium' },
    { title: 'Insert Interval', difficulty: 'Medium' },
    { title: 'Is Subsequence', difficulty: 'Easy' },
    { title: 'Two Sum', difficulty: 'Easy' },
    { title: 'Add Two Numbers', difficulty: 'Hard' },
    { title: 'Two Sum', difficulty: 'Medium' },
  ];

  return (
    <Card className="bg-gray-700 p-4 rounded-lg text-white border-none shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Recently Solved</h3>
      <ul>
        {problems.map((problem, index) => (
          <li key={index} className="flex justify-between">
            <span>{problem.title}</span>
            <span className={`text-${problem.difficulty === 'Easy' ? 'green-400' : problem.difficulty === 'Medium' ? 'yellow-400' : 'red-400'}`}>
              {problem.difficulty}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default RecentlySolvedCard;