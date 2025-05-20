/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { Children, cloneElement, ReactNode } from "react";

const Clone = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-[202%] gap-3">
      {Children.map(children, (child: any) => cloneElement(child))}
      {Children.map(children, (child: any) => cloneElement(child))}
    </div>
  );
};

const Logos = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap py-4">
      <div className="inline-flex gap-10 whitespace-nowrap font-semibold text-lg text-zinc-600 dark:text-[#626262] animate-[marquee_26s_linear_infinite] text-shadow cursor-default">
        <Image
          src={"/Google_Cloud_logo.svg"}
          width={160}
          height={90}
          alt=""
          className="marquee-images"
          fetchPriority="high"
        />
        <Image
          src={"/logo-qlik_d49uek.svg"}
          width={60}
          height={60}
          alt=""
          className="marquee-images"
          fetchPriority="high"
        />
        <Image
          src={"/Snowflake_Logo.svg"}
          width={120}
          height={45}
          alt=""
          className="marquee-images"
          fetchPriority="high"
        />
        <span className="flex gap-2 items-center font-['system-ui']">
          Microsoft Power BI
          <Image
            src={"/New_Power_BI_Logo.svg"}
            width={40}
            height={40}
            alt=""
            className="marquee-images"
            fetchPriority="high"
          />
        </span>
        <span className="flex gap-2 items-center font-['system-ui']">
          Microsoft Excel
          <Image
            src={"/Microsoft_Office_Excel_(2019–present).svg"}
            width={45}
            height={45}
            alt=""
            className="marquee-images"
            fetchPriority="high"
          />
        </span>
      </div>
    </div>
  );
};

export const MarqueeLogos = () => {
  return (
    <Clone>
    <Logos />
  </Clone>
  )
};
