import { Card } from './ui/card';

function TaskCard({ assigned, title, completed, total }) {
  return (
    <Card className="bg-glassbg rounded-lg shadow-lg md:p-12 w-full p-12 w-7/8 w text-white border-none">
      <div className='flex justify-between gap-4 flex-wrap'>
        <div className='flex flex-col'>
          <h3 className="md:text-4xl text-2xl font-semibold"> {title} </h3>
          <h4 className="md:text-xl text-md">Assigned by: {assigned}</h4>
          <h4 className="md:text-xl text-md">Problems: {total}</h4>
        </div>
        <div className=' flex justify-center md:justify-center md:w-full'>
        <img
          src="./vite.svg" // Replace with the actual path to the image
          alt="Profile"
          className="rounded-full w-20 object-cover"
        />
          {/* <svg className="w-20 h-20">
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
          </svg> */}
        </div>

        {/* <p className="text-4xl mt-2">{`${completed}/${total}`}</p> */}
      </div>
    </Card>
  );
}

export default TaskCard;