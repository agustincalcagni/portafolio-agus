import { HeaderStyle } from "../components/HeaderStyle";
import { allProfiles } from "../../../.contentlayer/generated";

export default function AboutPage() {
  const about = allProfiles.find((item) => item._raw.flattenedPath === "profile/acerca")
  
  return (
    <section className="dark:text-zinc-200">
      <HeaderStyle title="Acerca de mi" />
      <div className="p-6 space-y-4">
        <p>
          {about?.body.raw}
        </p>
      </div>
    </section>
  );
}
