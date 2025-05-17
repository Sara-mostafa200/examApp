import React, { Suspense } from 'react'
import { getAllExam } from '@/lib/api/exam.api';
import ExamCards from './_components/exam-card';

export default async function Page({ params } : { params : { examTitle:string , id:string }}) {
  // variables
  const {examTitle , id} = params ;
  const examName = decodeURIComponent(examTitle)

  // functions
  const exams = await getAllExam(id);
  return (
    <section className='mt-20 flex flex-col gap-6'>
    <h3 className='font-inter font-medium text-lg'>{examName}</h3>
      {/* exam card */}
      <Suspense fallback={<div className='flex items-center justify-center text-custom-main text-xl'>...isloading</div>}>
        <ExamCards exams={exams.exams} />
      </Suspense>

    </section>
  )
}

