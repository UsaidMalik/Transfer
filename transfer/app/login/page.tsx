import { getSession } from "../_lib/actions"
import LoginForm from "../_components/loginForm"
import { redirect } from "next/navigation"
import Link from "next/link"
const LoginPage = async () => {  
  const session = await getSession()

  if(session.isLoggedIn){
    redirect("/")
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl text- m-4">Good To See You Back!</h1>
      <LoginForm/>
      <h1 className="text-xs mt-5 text-gray-500">First Time? {"  "}
      <Link href={"/signup"} className="text-decoration-line underline text-blue-400 hover:text-gray-600">
         Sign Up Instead
      </Link>
    </h1>
    </div>
  )
}

export default LoginPage