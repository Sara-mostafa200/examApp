"use client"
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'
import React from 'react'

export default function Logout() {
  return (
    <Button
    asChild
    className="w-full cursor-pointer  h-11 bg-transparent rounded-lg  text-error hover:bg-error hover:text-white duration-300"
  >
    <div
      onClick={() => signOut({ callbackUrl : "/auth/login"}) }
      className="font-semibold  text-xl flex gap-10 justify-around"
    >
      {/* icon */}
      <LogOut className="!size-6 " />
      {/* title */}
      Log Out
    </div>
  </Button>
  )
}
