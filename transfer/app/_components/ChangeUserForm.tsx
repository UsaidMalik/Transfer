"use client";
import { changeUsername } from "../_lib/actions";
import { useFormState } from "react-dom";

const ChangeUsernameForm = () => {
  const [state, formAction] = useFormState<any, FormData>(changeUsername, undefined);

  return (
    <form action={formAction} className="flex flex-col space-y-4 bg-white p-4 rounded-lg shadow-md max-w-sm mx-auto">
      <input
        type="text"
        name="username"
        required
        placeholder="New Username"
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Change Username
      </button>
      {state?.error && <p className="text-red-500">{state.error}</p>}
    </form>
  );
};

export default ChangeUsernameForm;
