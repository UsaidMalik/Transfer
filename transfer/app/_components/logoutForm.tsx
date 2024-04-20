import { logout } from "../_lib/actions";

const LogoutForm = () => {
  return (
    <form action={logout}>
      <input
        type="submit"
        value="Logout"
        className="cursor-pointer bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      />
    </form>
  );
};

export default LogoutForm;
