import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import google from "../../../../../public/assets/images/LogoGoogle.svg";
import twitter from "../../../../../public/assets/images/twitter.svg";
import facebook from "../../../../../public/assets/images/facebook.svg";
import apple from "../../../../../public/assets/images/apple.svg";

export default function ContinueWith() {
  // varible google, twitter, facebook, apple
  const images = [
    {src: google ,title: 'google'},
    {src: twitter ,title: 'twitter'},
    {src: facebook ,title: 'facebook'},
    {src: apple ,title: 'apple'},
  ];

  return (
    <>
      {/* Continue with */}
        <div className="relative w-full mt-8">
          <p
            className="text-center font-inter text-[#6C737F] before:content-[''] before:w-28 before:h-[1px] before:absolute before:bg-[#E7E7E7] before:top-1/2 before:translate-y-1/2  before:left-0 
          after:content-[''] after:w-28 after:h-[1px] after:absolute after:bg-[#E7E7E7] after:top-1/2 after:translate-y-1/2  after:right-0 
          "
          >
            <span className="block">Or Continue with</span>
          </p>
        </div>

        {/* icons */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-8 ">
          {/* Google icon */}
          {images.map((image) => (
            <Button key={image.title} className="blue-shadow bg-white hover:bg-white rounded-2xl size-16 flex items-center justify-center border border-[#E0E0E9]">
              <Image src={image.src} alt={image + "Icon"}  />
            </Button>
          ))}
        </div>
    </>
  )
}
