import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'
import avatar from '@/../../public/assets/images/avatar.jpg' 
import Image from 'next/image'
import SearchQuizBtn from './search-quiz-btn'


export default function Header() {
  return (
    <div className='w-full flex flex-wrap lg:flex-nowrap  gap-6 items-center  '>
      {/* search input */}
        <div className='relative  w-full lg:w-9/12'>
        <Search  className='absolute left-4 top-1/2 -translate-y-1/2 text-main !size-6 ' />
        <Input type='search' placeholder='Search Quiz' className='w-full pl-14 h-14 shadow-lg border-0 rounded-2xl focus:border-main focus:border-2 focus-visible:!ring-0 focus-visible:!ring-transparent placeholder:text-xl' />
        </div>

        {/* action */}
         <SearchQuizBtn/>

        {/* avatar */}
            
          <div className='lg:w-1/12 aspect-square flex items-center justify-center rounded-full' >
          <Image src={avatar} className='size-14 object-cover rounded-full' alt='user'/>
         
          </div>
          
          

        
      
    </div>
  )
}
