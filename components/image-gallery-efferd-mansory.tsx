"use client";

import { useEffect, useRef, useState } from "react";
// import { LazyImage } from "@/components/lazy-image";
import type { ProjectImage } from "@/lib/types";
import { LazyImage } from "./lazy-image-efferd-mansory";

const COLUMN_COUNT = 4;

type ImageGalleryProps = {
  images: ProjectImage[];
  /** Called with the image's index in the full array — used to open the
   *  gallery dialog on the exact photo that was clicked. */
  onImageClick?: (index: number) => void;
};

/**
 * Tracks whether an element has scrolled near the viewport. Starts loading
 * ~200px before it's actually visible so images are ready by the time you
 * scroll to them, then stops observing once true — no reason to keep
 * watching an image that's already loaded.
 */
function useInView<T extends HTMLElement>(rootMargin = "200px") {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [inView, rootMargin]);

  return { ref, inView };
}

function GalleryTile({
  image,
  index,
  isPortrait,
  totalCount,
  onImageClick,
}: {
  image: ProjectImage;
  index: number;
  isPortrait: boolean;
  totalCount: number;
  onImageClick?: (index: number) => void;
}) {
  const { ref, inView } = useInView<HTMLButtonElement>();
  const width = isPortrait ? 1080 : 1920;
  const height = isPortrait ? 1920 : 1080;
  const ratio = isPortrait ? 9 / 16 : 16 / 9;

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => onImageClick?.(index)}
      className="block w-full cursor-pointer text-left"
      aria-label={`Open image ${index + 1} of ${totalCount}`}
    >
      <LazyImage
        alt={image.alt}
        containerClassName="cn-rounded"
        fallback={`https://placehold.co/${width}x${height}/`}
        inView={inView}
        ratio={ratio}
        src={image.src}
      />
    </button>
  );
}

export function ImageGalleryEfferdMansory({
  images,
  onImageClick,
}: ImageGalleryProps) {
  // Distribute round-robin into columns, keeping each image's original
  // index so we can report the right one back on click.
  const columns: { image: ProjectImage; index: number }[][] = Array.from(
    { length: COLUMN_COUNT },
    () => [],
  );

  images.forEach((image, index) => {
    columns[index % COLUMN_COUNT].push({ image, index });
  });

  return (
    <div className="relative flex w-full flex-col items-center justify-center px-4 py-10">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
        {columns.map((column, col) => (
          <div className="grid gap-4" key={col}>
            {column.map(({ image, index }) => {
              // Deterministic (index-based) instead of the original
              // Math.random() — that ran at render time and produced a
              // different value on the server vs. the client, causing a
              // Next.js hydration mismatch. Same visual variety, no bug.
              const isPortrait = (col + index) % 3 === 0;

              return (
                <GalleryTile
                  key={image.src}
                  image={image}
                  index={index}
                  isPortrait={isPortrait}
                  totalCount={images.length}
                  onImageClick={onImageClick}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
