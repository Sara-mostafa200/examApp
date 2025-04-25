import React from 'react'
import { ScoreChart } from './score-chart'

export default function ScoreCard({ExamResults} : {ExamResults : CheckResponse}) {
  
  
  return (
    <div className="p-5 bg-white  rounded-3xl font-inter">
      <span className='font-medium text-2xl'>Your score</span>
      <div className='flex items-center gap-20 '>
       <ScoreChart percentage={ExamResults.total} />
      <div className='flex flex-col gap-3'>
        <div className='flex gap-10 items-center'>
          <span className='text-2xl text-[#02369C] font-medium'>Correct</span>
          <div className='border border-[#02369C] text-lg text-[#02369C] font-medium rounded-full flex items-center justify-center p-2 size-8'>{ExamResults.correct}</div>
        </div>

        <div className='flex gap-10 items-center'>
          <span className='text-2xl text-[#CC1010] font-medium'>Incorrect</span>
          <div className='border border-[#CC1010] text-lg text-[#CC1010] font-medium rounded-full flex items-center justify-center p-2 size-8'>{ExamResults.wrong}</div>
        </div>
      </div> 
      </div>
      
      
    </div>
  )
}
