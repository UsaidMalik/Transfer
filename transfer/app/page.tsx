import { getSession } from "./_lib/actions"
import { redirect } from "next/navigation"
import ChangeUsernameForm from "./_components/ChangeUserForm"
import Link from "next/link"
const Homepage = async () => {  
  
  const session = await getSession()

  if(!session.isLoggedIn){
    redirect("/signup")
  }
  const username = session.username;
  return (
    <div className="p-4">
    
    <Link href={"/profile"} className=" absolute top-0 right-0 px-4 py-2">Profile</Link>
    <div className="flex flex-col justify-items items-center ">
      <h1 className="text-4xl m-10">Welcome {username}!</h1>
      <p>Get Ready to Transfer.</p>
    </div>
    </div>
  )
}

export default Homepage