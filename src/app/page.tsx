import Image from "next/image";
import { allProfiles } from "../../.contentlayer/generated";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";
import { MarqueeLogos } from "./components/MarqueeLogos";

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
            className="absolute top-0 left-0 grayscale-25"
          />
        </span>
      </header>

      <div className="p-6 space-y-4 dark:text-zinc-200">
        <p>{profile?.body.raw}</p>
      </div>

     <section className="overflow-x-hidden">
     <MarqueeLogos />
     </section>

      <footer className="grid mx-auto md:flex md:justify-between text-zinc-800 dark:text-zinc-200 mt-5 gap-3 px-6">
        <Link
          href="https://www.linkedin.com/in/agustincalcagni/"
          className="flex items-center gap-2 hover:text-[#FF7759] transition-colors duration-200"
        >
          <Linkedin />
          agustincalcagni
        </Link>
        <Link
          href="mailto:agustincalcagni@gmail.com"
          className="flex items-center gap-2 hover:text-[#FF7759] transition-colors duration-200"
        >
          <Mail />
          agustincalcagni@gmail.com
        </Link>
      </footer>
    </section>
  );
}
