import Link from 'next/link';
import { allProjects } from '../../../../.contentlayer/generated';
import { notFound } from 'next/navigation';
import { dateFormatter } from '@/app/consts';
import { MoveLeft } from 'lucide-react'
import MarkdownRenderer from '@/app/components/MarkDownrenderer';

type ProjectPageProps = {
  params: {
    id: string;
  };
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = allProjects.find(
    (proj) => proj._raw.flattenedPath === `projects/${params.id}`
  );

  if (!project) {
    notFound();
  }

  return (
    <section className="p-6 dark:text-zinc-200">
        <span>
        <Link href="/projects" className='flex gap-1 items-center mb-3 hover:underline'>
        <MoveLeft />
         Volver
        </Link>
        </span>
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-600 mb-4">{dateFormatter({ lang: "es-AR", rawDate: project.date })}</p>
      <div className="prose">
        <MarkdownRenderer content={project.body.raw} />
      </div>
    </section>
  );
}