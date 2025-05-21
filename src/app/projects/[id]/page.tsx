import { allProjects } from "../../../../.contentlayer/generated";
import { notFound } from "next/navigation";
import Link from "next/link";
import { dateFormatter } from "@/app/consts";
import { MoveLeft } from "lucide-react";
import MarkdownRenderer from "@/app/components/MarkDownrenderer";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = allProjects.find(
    (proj) => proj._raw.flattenedPath === `projects/${id}`
  );

  if (!project) notFound();

  return (
    <section className="p-6 dark:text-zinc-200">
      <span>
        <Link
          href="/projects"
          className="flex gap-1 items-center mb-3 hover:underline group transition-transform duration-300 text-zinc-400 dark:text-zinc-500"
        >
          <MoveLeft className="group-hover:-translate-x-1" />
          Volver
        </Link>
      </span>
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <time className="text-zinc-600 mb-4">
        {dateFormatter({ lang: "es-AR", rawDate: project.date })}
      </time>
      <div className="prose">
        <MarkdownRenderer content={project.body.raw ?? ""} />
      </div>
    </section>
  );
}
