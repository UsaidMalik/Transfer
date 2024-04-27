import Link from "next/link";
import { getSession } from "../_lib/actions";


export default async function Header() {
        {/*styled up mostly by gpt*/}
  console.log("getting")
  const session = await getSession();
  const streak = session.streak;
  const score = session.score;
  return (
    <header className="bg-gradient-to-r from-black to-green-400 text-white p-4 flex justify-between items-center">
    <div className="flex w-1/2 flex-end ml-auto">
      <div className="font-bold text-lg mx-10">
        <span className="bg-black bg-opacity-20 p-2 rounded">Streak: {streak}</span>
      </div>
      <div className="font-bold text-lg">
        <span className="bg-black bg-opacity-20 p-2 rounded">Score: {score}</span>
      </div>
      </div>
      <nav className="flex gap-4">
        <Link href={"/friends"} className="hover:bg-black hover:text-grey-200 p-2 rounded transition duration-300 ease-in-out">
            Friends
        </Link>
        <Link href={"/leaderboard"} className="hover:bg-black hover:text-grey-200 p-2 rounded transition duration-300 ease-in-out">
            Leaderboard
        </Link>
        <Link href={"/profile"} className="hover:bg-black hover:text-grey-200 p-2 rounded transition duration-300 ease-in-out">
            Profile
        </Link>
      </nav>
    </header>
  );
}