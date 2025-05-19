import Image from "next/image";

export const HeaderStyle = ({ title }: { title: string }) => {
  return (
    <header className="flex justify-between bg-[#F5F4F2] dark:bg-zinc-950/20 md:max-h-[240px] p-10 relative border-b border-zinc-200/70 dark:border-zinc-700/30 items-center overflow-hidden">
      <h3 className="font-semibold text-3xl text-zinc-200 md:p-10 p-4 z-50">
        {title}
      </h3>
      <span className="">
        <Image
          src="/banner.jpg"
          fill
          alt="Banner image"
          quality={100}
          className="absolute top-0 left-0 opacity-80"
        />
      </span>
    </header>
  );
};
