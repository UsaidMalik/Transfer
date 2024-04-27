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
        Whats The Closest Arabic Sentence To This Urdu Sentence
         بعض إنسان گھر بناتے ہیں
         `} answers={[
        "بعض الناس يبنون بيوت",
        "كثير من الناس يأكلون المنازل",
        "الصابرون يأكلون البيوت",
        "شخص محبوب يبني المنازل"
    ]} points={15} correctAnswer={0}/>
  </div>

  <div>
    Check The 
    <Link href={`arabic/cognates/?origin=${originLang}`}>
    Cognates Guide
    </Link> For More


  </div>
    </>)
  }