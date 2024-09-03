import { Card } from './ui/card';

function RankingCard({ type, classRank, batchRank, overallRank }) {
  return (
    <Card className="bg-gray-700 p-4 rounded-lg shadow-lg text-white border-none text-center">
      <h3 className="text-2xl font-semibold">{type} Ranking</h3>
      <p>Class wise: {classRank}</p>
      <p>Batch wise: {batchRank}</p>
      <p>Overall: {overallRank}</p>
    </Card>
  );
}

export default RankingCard;