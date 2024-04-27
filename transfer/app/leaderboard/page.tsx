import { topn } from "../_lib/top_n_algo";

export default async function Page() {
  // this isn't a protected route everyone 
  // should and can see this
  const n = 10
  const topTen: { name: string, score: number, streak: number, ranking: number }[] = await topn(n)

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center my-6">Leaderboard</h1>
      <h1 className="text-grey text-center my-6">Top {n} All Time</h1>
      <div className="flex flex-col">
        <div className="grid grid-cols-3 text-lg font-bold mb-2">
          <div>User Name</div>
          <div className="justify-self-center">Streak</div>
          <div className="justify-self-end">Score</div>
        </div>
        {topTen.map((player, index) => (
          <div key={index} className="grid grid-cols-3 border-b py-2">
            <div>{player.name}</div>
            <div className="justify-self-center">{player.streak}</div>
            <div className="justify-self-end">{player.score}</div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <a href="/" className="text-blue-500 hover:underline">
          Back to homepage
        </a>
      </div>
    </div>
  );
}
