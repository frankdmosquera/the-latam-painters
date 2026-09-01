import Link from "next/link";

export default function GalleryNotFound() {
  return (
    <main className="mx-auto flex max-w-2xl flex-col items-center gap-4 px-4 py-24 text-center">
      <h1 className="text-2xl font-semibold text-foreground">
        Project not found
      </h1>
      <p className="text-muted-foreground">
        We couldn&apos;t find the project you&apos;re looking for. It may have
        been moved or the link might be out of date.
      </p>
      <Link
        href="/gallery"
        className="mt-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
      >
        Back to gallery
      </Link>
    </main>
  );
}
