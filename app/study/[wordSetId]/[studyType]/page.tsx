"use client";

import { Grid } from "@/app/grid"
import { useParams } from "next/navigation"
import { useState } from "react";

type Word = {
  word: string,
  mean: string,
}

type StudyComponent = ({ word }: { word: Word }) => React.ReactNode

// const E2J: StudyComponent = ({ word }) => {
//   return (
//     <>
//       <div className="col-span-12 mockup-window border-base-300 border">
//         <div className="bg-base-200 flex justify-center px-4 py-16">
//           <input type="radio" name="word" id="word" className="peer/word hidden"></input>
//           <label htmlFor="word" className="w-full h-full peer-checked/word:hidden block text-center">
//             <p className="text-8xl font-bold">{word.word}</p>
//           </label>

//           <input type="radio" name="word" id="mean" className="peer/mean hidden" defaultChecked></input>
//           <label htmlFor="mean" className="w-full h-full peer-checked/mean:hidden block text-center">
//             <p className="text-8xl font-bold">{word.mean}</p>
//           </label>
//         </div>
//       </div>
//     </>
//   )
// }

const J2E: StudyComponent = ({ word }) => {
  return (
    <>
      <div className="col-span-12 mockup-window border-base-300 border">
        <div className="bg-base-200 flex justify-center px-4 py-16">
          <input type="radio" name="word" id="mean" className="peer/mean hidden"></input>
          <label htmlFor="mean" className="w-full h-full peer-checked/mean:hidden block text-center">
            <p className="text-8xl font-bold">{word.mean}</p>
          </label>

          <input type="radio" name="word" id="word" className="peer/word hidden" defaultChecked></input>
          <label htmlFor="word" className="w-full h-full peer-checked/word:hidden block text-center">
            <p className="text-8xl font-bold">{word.word}</p>
          </label>
        </div>
      </div>
    </>
  )
}

export default function Study() {
  const { wordSetidParam, studyTypeParam } = useParams()
  const words: Word[] = [{ mean: "反応する", word: "react" }, { mean: "次に", word: "next" }]
  const [position, setPosition] = useState<number>(0);

  return (
    <Grid className="px-10">
      <J2E word={words[position]} />
      <button className="col-span-6 w-full py-10 bg-base-200"
        onClick={() => setPosition(Math.max(0, position - 1))}
      >
        {"<"}
      </button>

      <button className="col-span-6 w-full py-10 bg-base-200"
        onClick={() => setPosition(Math.min(words.length - 1, position + 1))}
      >
        {">"}
      </button>
    </Grid>
  )
}