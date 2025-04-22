import React from "react";
import logo from "@/../../public/assets/images/dashBoardLogo.png";
import Image from "next/image";
import DashboardBtn from "./dashboard-btn";
import QuizHistoryBtn from "./quiz -history-btn";
import Logout from "./logout";
export default function SideBar() {
    
    
  return (
    <div className="w-full lg:w-1/5 flex flex-col gap-14">
      {/* logo */}
      <Image src={logo} alt="elevetLogo" />

      {/* content */}
      <div className="flex flex-col gap-8">
        {/* dashboard btn */}
        <DashboardBtn/>

        {/* Quiz History btn */}
        <QuizHistoryBtn/>
      </div>

      {/* footer */}
      <Logout/>
    </div>
  );
}
