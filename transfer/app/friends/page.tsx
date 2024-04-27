// Page.tsx
import React, { useState } from 'react';
import { redirect } from 'next/navigation';
import { getSession } from '../_lib/actions';
import FriendList from './components/FriendList';
import ReccomendedFriends from './components/ReccomendedFriends';

export default async function Page() {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect('/login');
  }
  const friends = session?.friends
  console.log(friends)
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold my-4">My Friends</h1>
      <FriendList friends={friends ?? []} />
      <h1 className="text-2xl font-bold my-4">Reccomended friends</h1>
      <ReccomendedFriends numFriends={10}/>
    </div>
  );
}

// <FriendSearch onAddFriend={addFriendToDatabase} />
//<AddFriendForm onSubmit={/* form submission logic here */} />
//
