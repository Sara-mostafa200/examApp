import React from 'react'
import RegisterForm from './_components/register-form'

export default function Page() {
  return (
   <div className="flex flex-col gap-8 p-5 lg:pt-8 lg:pb-[7.5rem] lg:pr-[10.5rem] lg:pl-[8.25rem]">
        {/* Title */}
        <h3 className="font-inter font-bold text-2xl">Sign up</h3>
        <RegisterForm/>
      </div>
  )
}
