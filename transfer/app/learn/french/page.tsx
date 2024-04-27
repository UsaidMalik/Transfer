import Header from "@/app/_components/header";
import QuestionModal from "../components/QuestionModal";
import Link from "next/link";

export default async function Home({
    searchParams,
  }: {
    searchParams: { [key: string]: string | string[] | undefined };
  }) {
   const originLang = searchParams["origin"] ?? ""; // default value is "1"
    
    return (<>
    <Header/>
    <div className="my-10">
    <QuestionModal question={`
        Whats The Closest French Sentence To This Englis Sentence
        An admirable accident from the adventure
         `} answers={[
         "une horrible maison de l'aventure",
        "un horrible accident de l'aventure",
        "un admirable accident de l'aventure",
        "une admirable maison de l'aventure"
    ]} points={15} correctAnswer={2}/>
  </div>

  <div>
    Check The 
    <Link href={`french/cognates/?origin=${originLang}`}>
    Cognates Guide</Link> For More


  </div>
    </>)
  }