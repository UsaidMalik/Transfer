"use client";

import React from 'react';
import { addFriend } from '@/app/_lib/actions';
import { useFormState } from 'react-dom';

const AddFriendForm = ({ friendName }: { friendName: string }) => {

  const [state, formAction] = useFormState<any, FormData>(addFriend, undefined);

return (<>
    <form action={formAction}>
      <input
      type='text'
      name='friendName'
      value={friendName} 
      readOnly 
      hidden={true}
      />
      <input 
      type="submit" 
      value={`Add ${friendName}`} 
      className="px-4 py-2 bg-green-500 text-white rounded shadow"
      />
      {state?.error && <p className="text-red-500 text-sm mt-2">{state.error}</p>}
    </form>
    </>
  );
};

export default AddFriendForm;
