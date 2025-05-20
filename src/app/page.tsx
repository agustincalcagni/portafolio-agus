import Image from "next/image";
import { allProfiles } from "../../.contentlayer/generated";
import { notFound } from "next/navigation";
import { Mail, Linkedin, MessageCircle } from "lucide-react";

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

      <div className="overflow-hidden whitespace-nowrap py-4 bg-zinc-100 dark:bg-zinc-900">
        <div className="inline-block whitespace-nowrap font-semibold text-lg text-zinc-700 dark:text-zinc-300 animate-[marquee_20s_linear_infinite]">
          {allProfiles.map((item) => {
            const skills =
              typeof item.skills === "string"
                ? item.skills.split(",")
                : ["No disponible"];
            return (
              <span key={item._id}>
                {skills.map((skill, index) => (
                  <span key={index}>{skill.trim()} • </span>
                ))}
              </span>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center gap-4 py-8">
        <a
          href="https://wa.me/+5492665139328"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 transition-colors"
        >
          <MessageCircle size={18} /> WhatsApp
        </a>
        <a
          href="https://www.linkedin.com/in/cacalcagni/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 transition-colors"
        >
          <Linkedin size={18} /> LinkedIn
        </a>
        <a
          href="mailto:agustincalcagni@gmail.com"
          className="flex items-center gap-2 px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 transition-colors"
        >
          <Mail size={18} /> Gmail
        </a>
      </div>
    </section>
  );
}
