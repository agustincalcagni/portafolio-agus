import Image from "next/image";
import { allProfiles } from "../../.contentlayer/generated";
import { notFound } from "next/navigation";

export default function Home() {
  const profile = allProfiles.find(
    (item) => item._raw.flattenedPath === "profile/principal"
  );
  if (!profile) {
    notFound();
  }

  return (
    <section>
      <header className="flex justify-between bg-[#F5F4F2] dark:bg-zinc-950/20 md:max-h-[240px] md:p-10 p-4 relative border-b border-zinc-200/70 dark:border-zinc-700/30 items-center overflow-hidden">
        <div className="flex gap-3 items-center z-50 w-full md:p-[13px]">
          <Image
            src="/avatar-agus.png"
            width={90}
            height={90}
            alt="Avatar image"
            className="rounded-md bg-[#ff7759e8]"
            fetchPriority="high"
          />
          <aside className="flex flex-col max-w-sm text-[20px] text-zinc-300">
            <span>Agustín Calcagni</span>
            <span>{profile?.speciality}</span>
          </aside>
        </div>
        <span className="flex">
          <Image
            src="/banner.jpg"
            fill
            alt="Banner image"
            quality={100}
            className="absolute top-0 left-0 opacity-80"
          />
        </span>
      </header>

      <div className="p-6 space-y-4 dark:text-zinc-200">
        <p>{profile?.body.raw}</p>
      </div>

      <div className="overflow-hidden whitespace-nowrap py-4 ">
        <div className="inline-flex gap-10 whitespace-nowrap font-semibold text-lg text-zinc-700 dark:text-[#626262] animate-[marquee_20s_linear_infinite]">
          <Image
            src={"/Google_Cloud_logo.svg"}
            width={160}
            height={90}
            alt=""
            className="marquee-images"
          />
          <Image
            src={"/logo-qlik_d49uek.svg"}
            width={60}
            height={60}
            alt=""
            className="marquee-images"
          />
          <Image
          src={"/Snowflake_Logo.svg"}
          width={120}
          height={45}
          alt=""
          className="marquee-images"
          />
          <span className="flex gap-2 items-center font-['system-ui']">
            Microsoft Power BI
            <Image
              src={"/New_Power_BI_Logo.svg"}
              width={45}
              height={45}
              alt=""
              className="marquee-images"
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
            />
          </span>
        </div>
      </div>
    </section>
  );
}
