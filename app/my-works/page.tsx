import Container from "@/components/ui/Container";

const works = [
  {
    title: "Vespera – Free Online Photo Joiner",
    description:
      "Free online photo joiner & collage maker — merge 2–6 photos, add frames, shapes, and text, download in your browser.",
    category: "Photo Joiner",
    href: "https://vespera-photo-joiner.vercel.app/",
  },
  {
    title: "Vespera – Free Online Image Editor",
    description:
      "A browser-based image editor with filters, adjustments, background blur, crop, rotate, overlays, frames, and HD export.",
    category: "Image Editor",
    href: "https://chromiva.vercel.app/",
  },
  {
    title: "JSON to CSV Converter",
    description:
      "Convert JSON data into clean CSV format directly in your browser.",
    category: "Developer Tool",
    href: "https://data-converter-five.vercel.app/",
  },
//   {
//     title: "JSON Validator",
//     description:
//       "Validate JSON data and quickly identify syntax problems.",
//     category: "Developer Tool",
//     href: "#",
//   },
//   {
//     title: "CSV to JSON",
//     description:
//       "Convert CSV files or data into structured JSON.",
//     category: "Developer Tool",
//     href: "#",
//   },
//   {
//     title: "Image Compressor",
//     description:
//       "Reduce image file sizes while maintaining useful image quality.",
//     category: "Image Tool",
//     href: "#",
//   },
];

export default function MyWorksPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 dark:bg-slate-950 sm:py-20">
      <Container>
        {/* Header */}
        <section className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            My Works
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-50 sm:text-5xl">
            Tools and side projects I&apos;ve built.
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            A collection of developer utilities, experiments, and useful
            tools I&apos;ve built outside my professional projects.
          </p>
        </section>

        {/* Works Grid */}
        <section className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <a
              key={work.title}
              href={work.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500/50"
            >
              <div className="flex min-h-[220px] flex-col">
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {work.category}
                </p>

                <h2 className="mt-3 text-xl font-bold text-slate-950 dark:text-slate-50">
                  {work.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                  {work.description}
                </p>

                <div className="mt-auto pt-6">
                  <span className="text-sm font-semibold text-blue-600 transition-all group-hover:tracking-wide dark:text-blue-400">
                    Open Tool →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </section>
      </Container>
    </main>
  );
}