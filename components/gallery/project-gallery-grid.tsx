"use client";

import { useMemo, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ProjectCard } from "./project-card";
import { ProjectGalleryDialog } from "./project-gallery-dialog";
import { getPaginationRange, ELLIPSIS } from "@/lib/pagination";
import type { Project } from "@/lib/types";

const PAGE_SIZE = 4;

type ProjectGalleryGridProps = {
  projects: Project[];
  /**
   * "dialog" (default) opens the lightbox directly in place — used for the
   * homepage teaser grid. "link" routes each card to its real static page
   * at /gallery/[slug] instead — used on the /gallery listing page, so
   * each project is a real, crawlable, indexable URL.
   */
  cardMode?: "dialog" | "link";
};

export function ProjectGalleryGrid({
  projects,
  cardMode = "dialog",
}: ProjectGalleryGridProps) {
  const [page, setPage] = useState(1);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const pageCount = Math.ceil(projects.length / PAGE_SIZE);

  const visibleProjects = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return projects.slice(start, start + PAGE_SIZE);
  }, [projects, page]);

  const paginationRange = useMemo(
    () => getPaginationRange(page, pageCount, 1),
    [page, pageCount],
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-6 min-[640px]:grid-cols-2 min-[970px]:grid-cols-1">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            onOpen={cardMode === "dialog" ? setActiveProject : undefined}
            href={cardMode === "link" ? `/gallery/${project.slug}` : undefined}
          />
        ))}
      </div>

      {pageCount > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage((p) => Math.max(1, p - 1));
                }}
                aria-disabled={page === 1}
                className={
                  page === 1 ? "pointer-events-none opacity-50" : undefined
                }
              />
            </PaginationItem>

            {paginationRange.map((item, index) =>
              item === ELLIPSIS ? (
                <PaginationItem key={`ellipsis-${index}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              ) : (
                <PaginationItem key={item}>
                  <PaginationLink
                    href="#"
                    isActive={item === page}
                    onClick={(e) => {
                      e.preventDefault();
                      setPage(item);
                    }}
                  >
                    {item}
                  </PaginationLink>
                </PaginationItem>
              ),
            )}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage((p) => Math.min(pageCount, p + 1));
                }}
                aria-disabled={page === pageCount}
                className={
                  page === pageCount
                    ? "pointer-events-none opacity-50"
                    : undefined
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}

      <ProjectGalleryDialog
        project={activeProject}
        open={activeProject !== null}
        onOpenChange={(open) => {
          if (!open) setActiveProject(null);
        }}
      />
    </div>
  );
}
