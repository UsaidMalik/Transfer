"use client";

import { useState } from "react";
import SmallImage from "./_components/_/image";



export default function Home() {
  const [visibleTree, setVisibleTree] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">

      <h1 className="text-4xl ">Ready to Transfer?</h1>


      <div>
        <p className="text-2xl pb-10">Sign Up Now</p>
        <form className="">
          <input type="text" placeholder="Username"/>
          <input type="text" placeholder="Password" />
          <input type="submit" placeholder="Login/Signup"/>
        </form>
      </div>

      <div className="w-4/5 h-1 bg-gray-300 rounded-full opacity-50"></div>

      <div className="w-96px text-2xl p-0 m-0">
        Experience Transfer:
        <p className="opacity-50 text-sm">Urdu To Arabic</p>
        <p className="text-lg py-5 ">Here is an Arabic sentence, all the cognates are highlighted:</p>
        <p className="text-lg py-5">Which sentence in Urdu do you think has the closest meaning?</p>
        <p className="text-right justify-end">
        <span className="text-green-400">مَثَلًا</span>{" "}
        <span className="text-green-400">كَلِمَةً</span> {" "}
        <span className="text-green-400">طَيِّبَةً</span>
                                        {" "}كَشَجَرَةٍ    {" "}
        <span className="text-green-400">طَيِّبَةٍ</span>{" "}
        <span className="text-green-400">أَصْلُ</span>
                                          هَا        {" "} 
        <span className="text-green-400">ثَابِتٌ</span>{" "}
        <span className="text-green-400"> وَ</span>        
        <span className="text-green-400">فَرْعُ</span>
                                        هَا فِى {" "}
        <span className="text-green-400">ٱلسَّمَآءِ</span> 
        </p>
        <p className="opacity-50 text-sm pt-2">Try hovering over some words to see a physical representation</p>
        <div>Answers
        <p>
              <span className="text-green-400">طیؔب</span>{" "}
              <span className="text-green-400">کلمہ</span>{" "}
              کے{" "}
              <span className="text-green-400">مثال</span>{" "}
              <span className="text-green-400">طیؔب</span>{" "}
              <span 
                className="underline"
              onMouseOver={() => setVisibleTree(true)}
                onMouseLeave = {() => setVisibleTree(false)}
               >
                 {visibleTree && <div className="absolute">
                  <SmallImage path={"/tree.jpg"} alt={"tree pic"}/>
                </div>}
                درخت</span> {" "}
                ہے{" "}
                اسکا{" "}
              <span className="text-green-400">اصل</span>{" "}
              <span className="text-green-400">ثابت</span>{" "}
              <span className="text-green-400">و</span>{" "}
              <span className="text-green-400">فرع</span>{" "}
              <span className="text-green-400">سماء</span>{" "}
                مے
        </p>


        </div>


      </div>
    </main>
  );
}
