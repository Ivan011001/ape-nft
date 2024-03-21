import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full py-[17px] px-6 lg:py-[22.5px] bg-transparent border border-stone-900 text-xs lg:text-base font-normal font-messinaSans leading-[14px] lg:leading-[19px] text-white uppercase rounded-tr-lg rounded-tl-none rounded-bl-none rounded-br-lg lg:rounded-tr-xl lg:rounded-br-xl ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white placeholder:text-opacity-25 focus-visible:outline-none focus-visible:border-white disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
