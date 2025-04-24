import React from 'react'
import UserInfo from './_components/user-info'
import QuizesWrapper from './_components/quizes-wrapper'

export default function page() {
  
  return (
    <div className='flex flex-col gap-10 '>
      <UserInfo/>
      <QuizesWrapper/>      
    </div>
  )
}
