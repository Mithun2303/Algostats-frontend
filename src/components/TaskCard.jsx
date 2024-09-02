import { Card } from './ui/card';

function TaskCard({ assigned, title, completed, total }) {
  return (
    <Card className="bg-gray-700 rounded-lg shadow-lg text-white border-none">
      <div className='p-10 mt-0 flex justify-center'>
        <div className='flex flex-col'>
          <h3 className="pr-10 pb-4 text-4xl font-semibold"> {title} </h3>
          <h4 className="text-1xl pr-16">Assigned by: {assigned}</h4>
          <h4 className="text-1xl pr-16">Problems: {total}</h4>
        </div>
        <svg className="w-20 h-20">
          <circle
            className="text-gray-700"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r="35"
            cx="50"
            cy="50"
          />
          <circle
            className="text-teal-400"
            strokeWidth="8"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="35"
            cx="40"
            cy="40"
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dy=".3em"
            fill="white"
            className="text-xl font-bold"
          >
            {completed}/{total}
          </text>
        </svg>

        {/* <p className="text-4xl mt-2">{`${completed}/${total}`}</p> */}
      </div>
    </Card>
  );
}

export default TaskCard;