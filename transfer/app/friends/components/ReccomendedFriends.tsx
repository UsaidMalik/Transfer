import { listNFriends } from "../lib/listNFriends";
import AddFriendForm from "./AddFriend";

// FriendSearch.tsx
const ReccomendedFriends = async ({ numFriends }: { numFriends: number }) => {
  const addableFriends: {name:string, streak:string, score:string}[] = await listNFriends(numFriends);

  return (
    <div className="flex flex-col space-y-4">
      {addableFriends.map((friend, index) => (
        <div key={index} className="flex justify-between items-center">
          <span className="text-lg font-medium">{friend.name} Streak {friend.streak} Score {friend.score}</span>
          <AddFriendForm friendName={friend.name} />
        </div>
      ))}
    </div>
  );
};

export default ReccomendedFriends;
