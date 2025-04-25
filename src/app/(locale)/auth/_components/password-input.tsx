import { Input } from "@/components/ui/input";
import React, { forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

//{placeholder}:{placeholder:string}
// eslint-disable-next-line react/display-name
export  const PasswordInput = forwardRef<
  HTMLInputElement,
  React.ComponentProps<typeof Input>
>((props, ref) => {
  // useState
  const [showInput, setshowInput] = useState(false);

  // toggle
  const changeInput = () => {
    if (showInput) {
      setshowInput(false);
    } else {
      setshowInput(true);
    }
  };

  
  

  return (
    <div className="relative">
      <Input
        type={showInput ? "text" : "password"}
        placeholder={props.placeholder}
        {...props}
        ref={ref}
        
        className={`login-btn ${props.className} `}
      />
      <div
        onClick={changeInput}
        className="cursor-pointer absolute right-2 top-1/2 text-[#A1A4A9] -translate-y-1/2"
      >
        {showInput ? (
          <Eye className="size-6 " />
        ) : (
          <EyeOff className="size-6 " />
        )}
      </div>
    </div>
  );
});
