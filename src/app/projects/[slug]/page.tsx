import { ProjectSlugParams } from "@/types/project";
import ProjectSlugView from "@/views/pages/project-page-slug";

export default async function Projects({
  params,
}: {
  params: Promise<ProjectSlugParams>;
}) {
  const { slug } = await params;

  return (
    <div>
      <ProjectSlugView slug={slug} />
    </div>
  );
}
