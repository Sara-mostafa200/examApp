"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

export default function Quizes() {
  // hooks
  const [subjectsData, setsubjectsData] = useState<Pagination<{
    subjects: Subject[];
  }> | null>(null);
  const router = useRouter();

  // functions
  const getAllSubjects = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/subject`);

      const payload: Pagination<{ subjects: Subject[] }> =
        await response.json();

      setsubjectsData(payload);
    } catch (error) {
      const payload = (error as Error).message;
      return payload;
    }
  };

  

  useEffect(() => {
    getAllSubjects();
  }, []);

  return (
    <div className="w-full bg-[#FFFFFF] px-4 flex flex-col gap-6  py-8 rounded-2xl">
      {/* headline */}
      <div className="flex w-full justify-between text-main items-center text-2xl font-medium">
        <span className="">Quizes</span>
        <span className="cursor-pointer">View All</span>
      </div>

      {/* Quizes */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
       
          {subjectsData?.subjects.map((subject) => (
            <div
              onClick={() => router.push(`/exams/${subject.name}/${subject._id}`)}
              key={subject._id}
              className=" cursor-pointer h-72 flex items-start justify-center relative  "
            >
              <Image
                src={subject.icon}
                alt={subject.name}
                fill
                sizes="25vw"
                className="object-cover rounded-xl"
              />

              <div className="rounded-[0.563rem] text-white p-4 bg-[#1935CA] bg-opacity-[40%] backdrop-blur-xl mt-48">
                {/* title */}
                <p className="text-sm font-bold ">{subject.name}</p>

                {/* sub title */}
                <p className="text-xs font-medium mt-1">
                  Voluptatem aut ut dignissimos blanditiis
                </p>
              </div>
            </div>
          ))}
       
      </div>
    </div>
  );
}
