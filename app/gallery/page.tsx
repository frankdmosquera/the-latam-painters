import type { Metadata } from "next";
import { ProjectGalleryGrid } from "@/components/gallery/project-gallery-grid";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "Browse our recent painting projects — exteriors, interiors, and full home repaints.",
};

export default function GalleryPage() {
  const projects = getProjects();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-foreground">
          Recent Projects
        </h1>
        <p className="mt-2 text-muted-foreground">
          A look at some of our recent painting work.
        </p>
      </div>

      <ProjectGalleryGrid projects={projects} cardMode="link" />
    </main>
  );
}
