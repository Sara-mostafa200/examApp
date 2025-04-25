import { Button } from '@/components/ui/button'
import React, { SetStateAction, useState } from 'react'

export default function Instructions({setshowQuestionCard} : {setshowQuestionCard : React.Dispatch<SetStateAction<boolean>>}) {
  const [closeInstructions, setcloseInstructions] = useState(true)

  
  return (
    <>
    { closeInstructions &&
      <div className="bg-white rounded-3xl p-6 flex flex-col items-center gap-12">
    {/* Instructions */}
    <div className="Instructions">
      <h3 className="text-2xl font-medium mb-4">Instructions</h3>
      <ul className="list-disc pl-8 text-[#535353]">
        <li className="font-medium text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </li>
        <li className="font-medium text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </li>
        <li className="font-medium text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </li>
        <li className="font-medium text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </li>
      </ul>
    </div>

    {/* start action */}
    <Button onClick={() => {setcloseInstructions(false); setshowQuestionCard(true); }} className="w-full rounded-full h-12"> Start </Button>
  </div>}
    </>
  )
}
