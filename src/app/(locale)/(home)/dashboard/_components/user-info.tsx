import { Progress } from '@/components/ui/progress'
import { CircleCheck, Clock5, Flag } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import avatar from '@/../../public/assets/images/avatar.jpg' 


export default function UserInfo() {
  
  return (
    <div className='mt-10 flex flex-col items-center   lg:flex-row gap-14  lg:gap-[6rem] bg-[#FFFFFF] py-8 px-4 rounded-2xl shadow-lg'>
      {/* image */}
      <div className='w-full lg:w-1/6 '>
       <div className='w-52 h-52  overflow-hidden mx-auto  relative'>
        <Image src={avatar} alt='userPhoto' fill className='w-full object-cover ' />
      </div> 
      </div>
      
      {/* content */}
      <div className='w-4/6 flex flex-col gap-6'>
         {/* info */}
        <div className='flex flex-col gap-1'>
          <p className='text-3xl font-bold text-main'>Sara Mostafa</p>
        <span className='text-[#979CA3] text-xl'>Voluptatem aut</span>
        </div>
        
        {/* progress*/}
        <Progress value={75} className='h-3' />

        {/* icons */}
        <div className='flex flex-wrap   gap-7 text-[#696F79]'>
          {/* Quiz Passed icon */}
          <div className='flex gap-4 items-center'>
            {/* icon */}
            <div className='shadow-lg size-16 rounded-xl flex items-center justify-center'>
            <Flag size={32} className='text-main ' />
            </div>

            {/* data */}
            <div className='flex flex-col gap-1'>
              {/* number */}
              <span className='text-3xl font-bold'>27</span>

              {/* title */}
              <span>Quiz Passed</span>
            </div>
          </div>

          {/* Fastest Time icon */}
          <div className='flex gap-4 items-center'>
            {/* icon */}
            <div className='shadow-lg size-16 rounded-xl flex items-center justify-center'>
            <Clock5  size={32} className='text-main ' />
            </div>

            {/* data */}
            <div className='flex flex-col gap-1'>
              {/* number */}
              <span className='text-3xl font-bold'>13 min</span>

              {/* title */}
              <span>Fastest Time</span>
            </div>
          </div>

           {/* Correct Answers icon */}
           <div className='flex gap-4 items-center'>
            {/* icon */}
            <div className='shadow-lg size-16 rounded-xl flex items-center justify-center'>
            <CircleCheck   size={32} className='text-main ' />
            </div>

            {/* data */}
            <div className='flex flex-col gap-1'>
              {/* number */}
              <span className='text-3xl font-bold'>200</span>

              {/* title */}
              <span>Correct Answers</span>
            </div>
          </div>
        </div>


      </div>

      
      
    </div>
  )
}
