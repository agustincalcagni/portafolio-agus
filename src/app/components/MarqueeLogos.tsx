import Image from "next/image";

const Logos = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap py-4">
      <div className="inline-flex gap-10 whitespace-nowrap font-semibold text-lg text-zinc-600 dark:text-[#626262] text-shadow cursor-default">
        <span className="flex gap-2 items-center font-['system-ui']">
          <Image
            src={"/PostgreSQL_logo.svg"}
            width={45}
            height={45}
            color="#fafafa"
            alt="PostgreSQL logo"
          />
          PostgreeSQL
        </span>
        <Image
          src={"/Google_Cloud_logo.svg"}
          width={160}
          height={90}
          alt="Google Cloud logo"
          className="marquee-images"
          fetchPriority="high"
        />
        <Image
          src={"/logo-qlik_d49uek.svg"}
          width={60}
          height={60}
          alt="Qlik logo"
          className="marquee-images"
          fetchPriority="high"
        />
        <Image
          src={"/Snowflake_Logo.svg"}
          width={120}
          height={45}
          alt="SnowFlake logo"
          className="marquee-images"
          fetchPriority="high"
        />
        <span className="flex gap-2 items-center font-['system-ui']">
          <Image
            src={"/New_Power_BI_Logo.svg"}
            width={40}
            height={40}
            alt="Microsoft Power BI logo"
            className="marquee-images"
            fetchPriority="high"
          />
          Power BI
        </span>
        <span className="flex gap-2 items-center font-['system-ui']">
          <Image
            src={"/Microsoft_Office_Excel_(2019–present).svg"}
            width={45}
            height={45}
            alt="Microsoft Excel logo"
            className="marquee-images"
            fetchPriority="high"
          />
          Excel
        </span>
      </div>
    </div>
  );
};

export const MarqueeLogos = () => {
  return (
    <div className="overflow-hidden py-4 whitespace-nowrap">
      <div className="flex w-max animate-[marquee_26s_linear_infinite] gap-10">
        <Logos />
        <Logos /> {/* Duplicación necesaria para efecto de bucle infinito */}
      </div>
    </div>
  );
};
