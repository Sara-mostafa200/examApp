import React from 'react'
import ExamCard from './_components/exam-card'

export default function Page({params}:{params:{id:string}}) {
    
  return (
    <section className='mt-20 flex flex-col gap-6'>

    {/* exam card */}
    <ExamCard/>

    </section>
  )
}

