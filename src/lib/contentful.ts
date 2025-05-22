import contentfulClient from "@/contentful/contentful.client";
import {
  TypePortofolio__websiteSkeleton,
  IAsset,
} from "@/contentful/types/portofolio.types";
import { Project } from "@/types/project"; // assuming your Project type

export const getAllProjects = async (): Promise<Project[]> => {
  const response =
    await contentfulClient.getEntries<TypePortofolio__websiteSkeleton>();

  return response.items.map((item) => ({
    id: item.sys.id,
    slug: item.fields.slug!,
    title: item.fields.title,
    description: item.fields.description || "", // ✅ now it's a plain string
    images:
      (item.fields.images as IAsset[])?.map(
        (asset) => `https:${asset.fields.file.url}`
      ) || [],
    link: item.fields.link || "",
    github: item.fields.github || "",
    technologies: item.fields.technologies || [],
    features: item.fields.features || [],
  }));
};
