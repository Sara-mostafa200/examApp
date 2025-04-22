import React from 'react'
import { ScoreChart } from './score-chart'

export default function ScoreCard() {
  return (
    <div className="p-5 bg-white  font-inter">
      <span>Your score</span>
      <div className='flex items-center gap-20 '>
       <ScoreChart />
      <div className='flex flex-col gap-3'>
        <div className='flex gap-10 items-center'>
          <span className='text-2xl text-[#02369C] font-medium'>Correct</span>
          <div className='border border-[#02369C] text-lg text-[#02369C] font-medium rounded-full flex items-center justify-center p-2 size-8'>89</div>
        </div>

        <div className='flex gap-10 items-center'>
          <span className='text-2xl text-[#CC1010] font-medium'>Incorrect</span>
          <div className='border border-[#CC1010] text-lg text-[#CC1010] font-medium rounded-full flex items-center justify-center p-2 size-8'>89</div>
        </div>
      </div> 
      </div>
      
      
    </div>
  )
}
