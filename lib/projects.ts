import type { Project } from "./types";

const PROJECT_TITLES = [
  "Modern Farmhouse Exterior",
  "Downtown Loft Interior",
  "Coastal Bungalow Refresh",
  "Victorian Restoration",
  "Minimalist Condo",
  "Craftsman Bungalow",
  "Suburban Family Home",
  "Industrial Warehouse Conversion",
  "Lakeside Cottage",
  "Mid-Century Modern Remodel",
  "Colonial Revival",
  "Ranch House Update",
  "Contemporary New Build",
  "Historic Brownstone",
  "Mountain Cabin Retreat",
  "Urban Rowhouse",
  "Tudor Style Home",
  "Desert Modern",
  "Scandinavian-Inspired Interior",
  "Classic Cape Cod",
  "Georgian Townhouse",
  "Split-Level Refresh",
  "Waterfront Estate",
  "Modern Farmhouse Interior",
  "Bohemian Loft",
  "Prairie Style Home",
  "Shaker-Inspired Kitchen Repaint",
  "High-Rise Condo Refresh",
  "Vintage Duplex Restoration",
  "A-Frame Cabin",
  "Spanish Revival Villa",
  "Row of Townhomes",
  "Converted Barn Home",
  "Rooftop Terrace Suite",
  "New Construction Spec Home",
  "Mid-Rise Apartment Common Areas",
  "Historic Church Conversion",
  "Lakefront Duplex",
  "Ski Chalet Retreat",
  "Modern Courtyard House",
];

function makeProject(index: number): Project {
  const slug = `project-${index + 1}`;
  const title = PROJECT_TITLES[index];

  const images = Array.from({ length: 20 }, (_, i) => ({
    src: `https://picsum.photos/seed/${slug}-${i + 1}/1200/900`,
    alt: `${title} – photo ${i + 1}`,
  }));

  return {
    slug,
    title,
    description: `A full interior and exterior repaint for a ${title.toLowerCase()}, including surface prep, color consultation, and a two-coat finish built to hold up year-round.`,
    thumbnail: `https://picsum.photos/seed/${slug}-thumb/600/600`,
    images,
  };
}

export const projects: Project[] = Array.from({ length: 40 }, (_, i) =>
  makeProject(i),
);

export function getProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
