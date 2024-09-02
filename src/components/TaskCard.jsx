import { Card } from './ui/card';

function TaskCard({ title, completed, total }) {
  return (
    <Card className="bg-blue-800 p-4 rounded-lg shadow-lg text-white border-none">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-4xl mt-2">{`${completed}/${total}`}</p>
    </Card>
  );
}

export default TaskCard;