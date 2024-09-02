import { Card } from './ui/card';

function RankingCard({ type, classRank, batchRank, overallRank }) {
  return (
    <Card className="bg-blue-800 p-4 rounded-lg shadow-lg text-white border-none">
      <h3 className="text-lg font-semibold">{type} Ranking</h3>
      <p>Class wise: {classRank}</p>
      <p>Batch wise: {batchRank}</p>
      <p>Overall: {overallRank}</p>
    </Card>
  );
}

export default RankingCard;