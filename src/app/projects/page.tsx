import { allProjects } from "../../../.contentlayer/generated";
import { dateFormatter } from "@/app/consts";
import { HeaderStyle } from "@/app/components/HeaderStyle";

export default async function ProjectsPage() {
  return (
    <section className="dark:text-zinc-200">
      <HeaderStyle title="Proyectos" />
      <div className="p-6">
        <ul className="grid md:grid-cols-2 gap-2">
          {allProjects.map((project) => (
            <li
              key={project._id}
              className="border border-zinc-300/70 dark:border-zinc-700/50 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <a
                href={`/${project._raw.flattenedPath}`}
                className="hover:text-[#FF7759]"
              >
                <h2 className="text-lg text-zinc-700 dark:text-zinc-300 font-semibold hover:underline">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-500">
                  {dateFormatter({ lang: "es-AR", rawDate: project.date })}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
