import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { FC, HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone: FC<PhoneProps> = ({
  className,
  dark = false,
  imgSrc,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <Image
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        alt="phone image"
        width={300}
        height={100}
        className="pointer-events-none z-50 select-none"
      />

      <div className="absolute -z-10 inset-0">
        <Image
          src={imgSrc}
          width={100}
          height={100}
          className="object-cover min-w-full min-h-full"
          alt="overlaying phone image"
        />
      </div>
    </div>
  );
};

export default Phone;
