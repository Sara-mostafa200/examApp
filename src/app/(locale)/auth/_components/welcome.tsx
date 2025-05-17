import Image from 'next/image'
import React from 'react'
import boy from "../../../../../public/assets/images/boy.png";
export default function Welcome() {
  return (
    <section className="w-full md:w-1/2 bg-[#F0F4FC] shadow-2xl md:rounded-tr-[6.25rem] md:rounded-br-[6.25rem] flex flex-col gap-20 items-start pt-20 pl-20 pr-9">
    {/* Text */}
    <div className="flex flex-col gap-2">
      {/* Headline */}
      <h1 className="font-bold text-[3.125rem] leading-[150%]">
        Welcome to <br />{" "}
        <span className="text-[#122D9C] text-[3.75rem]">Elevate</span>
      </h1>

      {/* Subtitle */}
      <span className="text-lg leading-[2.5rem]">
        Quidem autem voluptatibus qui quaerat aspernatur architecto natus
      </span>
    </div>

    {/* Image */}
    <Image src={boy} alt="boy studying" priority />
  </section>
  )
}
