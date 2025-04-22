import { getAllExam } from '@/lib/api/exam.api';
import React from 'react'

export default async function Quizes() {

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
    
          <div
         
          className=" cursor-pointer h-72  rounded-xl bg-[url('/assets/images/quiz.png')] bg-no-repeat bg-cover flex items-start justify-center  "
        >
          <div className="rounded-[0.563rem] text-white p-4 bg-[#1935CA] bg-opacity-[40%] backdrop-blur-xl mt-48">
            {/* title */}
            <p className="text-sm font-bold ">Front-end Web Development</p>

            {/* sub title */}
            <p className="text-xs font-medium mt-1">
              Voluptatem aut ut dignissimos blanditiis
            </p>
          </div>
        </div>
         
         
    </div>
    
  )
}
