import { getSession } from "./_lib/actions"
import { redirect } from "next/navigation"
import Header from "./_components/header"
import LanguagesDisplay from "./_components/languagesDisplay"
import AllLanguages from "./_components/languagesAdd"

const Homepage = async () => {  
  
  const session = await getSession()

  if(!session.isLoggedIn){
    redirect("/login")
  }
  const username = session.username;
  const languages = session.languages ?? {}
  console.log(languages)
  return (
    <div className="p-0">
    <Header/>
    <div className="flex flex-col justify-items items-center ">
      <h1 className="text-4xl m-10">Welcome {username}!</h1>
      <p>Get Ready to Transfer.</p>
    </div>
    <div className="px-10">
      <h1> My Learning Paths</h1>
      <LanguagesDisplay languages={languages}/>
    </div>
      <div className="flex flex-col items-center my-10">
        All Learning Paths
        <AllLanguages/>
      </div>

    </div>
  )
}

export default Homepage