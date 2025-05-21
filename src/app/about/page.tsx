import { HeaderStyle } from "../components/HeaderStyle";
import { allProfiles } from "../../../.contentlayer/generated";
import { notFound } from "next/navigation";

export default function AboutPage() {
  const about = allProfiles.find((item) => item._raw.flattenedPath === "profile/acerca")
  if (!about) {
    notFound()
  }
  const skills = about?.skills.split(",") || [""]
  return (
    <section className="dark:text-zinc-200">
      <HeaderStyle title="Acerca de mi" />
      <div className="p-6 space-y-4">
        <h3 className="font-semibold text-xl">{about?.speciality}</h3>
        <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap no-scroll-bar">
          {skills.map((skill, index) => (
            <span key={`skill-${index}`} className={`dark:text-zinc-400 text-zinc-600
              px-2 border border-zinc-300/70 dark:border-zinc-800 rounded cursor-default bg-gradient-to-b from-zinc-800 to-zinc-900
              `}>{skill}</span>
          ))}
        </div>
        <p className="mt-6">
          {about?.body.raw}
        </p>
      </div>
    </section>
  );
}
