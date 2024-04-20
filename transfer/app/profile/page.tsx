import { getSession } from "../_lib/actions"
import {redirect} from "next/navigation"
import ChangeUsernameForm from "../_components/ChangeUserForm"
import LogoutForm from "../_components/logoutForm"

const Page = async () => {  
// profile page is protected
  const session = await getSession()

  if(!session.isLoggedIn){
    redirect("/login")
  }
  const username = session.username
  return (

    <div className="flex justify-center items-center flex-col p-6 m-2">
        <h1 className="text-3xl m-4">Make Sure Its Something Memorable</h1>
        <p>Your Current UserName: {username}</p>
        <ChangeUsernameForm/>
        <div className="my-5">
        <LogoutForm/>
        </div>
    </div>
  )
}

export default Page