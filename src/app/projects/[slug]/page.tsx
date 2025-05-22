import { ProjectSlugParams } from "@/types/project";
import ProjectSlugView from "@/views/pages/project-page-slug";

export default async function Projects({
  params,
}: {
  params: ProjectSlugParams;
}) {
  const { slug } = params;

  return (
    <div>
      <ProjectSlugView slug={slug} />
    </div>
  );
}
