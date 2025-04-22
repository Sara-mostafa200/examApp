import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Logout() {
     
     
  return (
    <Button
    asChild
    className="w-full h-11 bg-transparent rounded-lg  text-error hover:bg-error hover:text-white duration-300"
  >
    <Link
      href="/dashboard"
      className="font-semibold  text-xl flex gap-10 justify-around"
    >
      {/* icon */}
      <LogOut className="!size-6 " />
      {/* title */}
      Log Out
    </Link>
  </Button>
  )
}
