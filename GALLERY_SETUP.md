# Project gallery — setup notes

## 1. Install dependencies

```bash
npm install @imagekit/next
npx shadcn@latest add dialog carousel pagination
```

## 2. Env var

```
# .env.local
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id
```

Until this is set, `GalleryImage` falls back to plain `<img>` tags — which is
what happens right now with the Picsum placeholder data in `lib/projects.ts`,
so everything renders correctly with zero ImageKit setup.

## 3. Drop-in files

```
lib/
  types.ts
  projects.ts
components/
  gallery/
    gallery-image.tsx
    project-card.tsx
    project-gallery-grid.tsx
    project-gallery-dialog.tsx
    project-image-carousel.tsx
    project-thumbnail-strip.tsx
```

## 4. Render it somewhere

```tsx
import { ProjectGalleryGrid } from "@/components/gallery/project-gallery-grid";
import { getProjects } from "@/lib/projects";

export default function GalleryPage() {
  return <ProjectGalleryGrid projects={getProjects()} />;
}
```

## Thumbnail strip (synced to the main carousel)

- `ProjectThumbnailStrip` is its own small `Carousel` instance — square thumbnails, active one gets a ring highlight, everything else dims slightly on hover-in. `dragFree: true` + `containScroll: "trimSnaps"` gives it that loose sliding feel rather than snapping rigidly to fixed positions, which fits a "jump around by 2-3" browsing pattern better than strict paging.
- Two-way sync: clicking any thumb calls `api.scrollTo(index)` on the main carousel; the main carousel's `select` event updates `current`, which the thumbnail strip watches and auto-scrolls itself to keep the active thumb in view — so scrubbing through the main image never leaves the active thumb off-screen.
- Responsive thumb count: `basis-1/5` on small screens (5 visible) up to `basis-[12.5%]` (8 visible) past 720px — scales with your existing breakpoint approach rather than a fixed pixel width.
- Conditional render: only shows once a project has more than 6 images — for a project with 4-5 photos, a thumbnail strip would just be noise; the arrows are enough. Since every project in your placeholder data has 20, you'll see it everywhere right now, but it'll correctly disappear for a lean project later.

## Known placeholders / open items

- **Image loading strategy**: the dialog currently mounts the full 20-image
  array as soon as it opens. You mentioned wanting a specific streaming
  approach for this — that logic isn't built yet, this is just a working
  placeholder so the rest of the UI is testable end to end.
- **Real images**: swap `src`/`thumbnail` values in `lib/projects.ts` from
  Picsum URLs to ImageKit-relative paths (e.g. `painting-co/project-1/1.jpg`)
  once assets are uploaded to ImageKit. No component changes needed —
  `GalleryImage` detects the format automatically.
- **970px breakpoint**: implemented as Tailwind arbitrary breakpoints
  (`min-[970px]:...`) since it doesn't match a default Tailwind breakpoint.
- **Theming**: all colors used (`bg-background`, `text-foreground`,
  `border-border`, etc.) are shadcn CSS variables, so re-theming per client
  is just a `globals.css` token swap — no component edits.
