export type ProjectImage = {
  /** Path relative to the ImageKit media library root, e.g. "painting-co/project-1/image-1.jpg" */
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  /** Short summary used on the project detail page and in meta description */
  description: string;
  /** Cover image shown on the card, same path convention as ProjectImage.src */
  thumbnail: string;
  images: ProjectImage[];
};
