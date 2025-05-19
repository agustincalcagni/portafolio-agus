import Image from "next/image";
import { allProfiles } from '../../.contentlayer/generated'
import { notFound } from "next/navigation";

export default function Home() {
  const profile = allProfiles.find((item) => item._raw.flattenedPath === "profile/principal")
  if (!profile) {
    notFound()
  }
 
  return (
    <section>
      <header className="flex justify-between bg-[#F5F4F2] dark:bg-zinc-950/20 md:max-h-[240px] p-10 relative border-b border-zinc-200/70 dark:border-zinc-700/30 items-center overflow-hidden">
        <div className="flex gap-3 items-center z-50 w-full p-[13px]">
          <Image
            src="/avatar-agus.png"
            width={90}
            height={90}
            alt="Avatar image"
            className="rounded-md bg-[#ff7759e8]"
          />
          <aside className="flex flex-col max-w-sm text-[20px] dark:text-zinc-400">
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

      
      <div className="overflow-hidden whitespace-nowrap py-4 bg-zinc-100 dark:bg-zinc-900">
        <div className="inline-block whitespace-nowrap font-semibold text-lg text-zinc-700 dark:text-zinc-300 animate-[marquee_20s_linear_infinite]">
         {allProfiles.map((item) => {
          const skills = item.skills.split(",") || "No, Disponible"
          return (
            <span key={item._id}>
            {skills.map((skill) => skill.concat(" • ")) ?? ""}
            </span>
          )
         })}
        </div>
      </div>
    </section>
  );
}
