"use client"
import Image from 'next/image'
import React, {  useEffect, useState } from 'react'
import timer from "@/../../public/assets/images/timer.svg";

type ExamTimerProps = {
  time : number ,
  onTimerEnd ?: () => void ,
  onTimerChange ?: (time : Date) => void
}

export default function ExamTimer({time , onTimerEnd , onTimerChange } : ExamTimerProps ) {
    // hooks
    const [date, setdate] = useState(new Date(0).setMinutes(time))

    // useEffect
    useEffect(() => {

        //  interval function to change timer
        const timerId = setInterval(() => {
            // set new timer in date 
            setdate((prev) => {
            const currentTime = new Date(prev)

            // check if timer end fire onTimerEnd function
            if (currentTime.getMinutes() === 0 && currentTime.getSeconds() === 0) {
                
                setTimeout(()=>{onTimerEnd?.();},10)
                
                
                
                window.clearInterval(timerId);
      
                return Date.now();
              }

             onTimerChange?.(currentTime)  
            
            //   decrease time
            return currentTime.setSeconds(currentTime.getSeconds() - 1)

            })
        } , 1000)

        return () => window.clearInterval(timerId)
    } , [onTimerEnd , onTimerChange])
    
  return (
    <div className="flex gap-2 items-center">
            {/* timer image */}
            <Image src={timer} alt="timer" />

            {/* time */}
            <span className="text-[#11CE19] text-xl">
              {/* format number in 2 digit */}
                {Intl.DateTimeFormat("en-US" ,{
                    minute: "2-digit",
                    second: "2-digit",
                }).format(date)}
                
                </span>
          </div>
  )
}
