// FriendList.tsx
import React from 'react';

interface FriendListProps {
  friends: string[];
}

const FriendList: React.FC<FriendListProps> = ({ friends }) => {
  return (
    <div className="space-y-2">
      {friends.map((friend) => (
        <div key={friend} className="p-2 bg-gray-200 rounded shadow">
          {friend}
        </div>
      ))}
    </div>
  );
};

export default FriendList;
