import Container from "@/components/ui/Container";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

const services = [
  {
    title: "Frontend Development",
    description:
      "I build responsive and maintainable interfaces using React, Next.js, TypeScript, and modern UI practices.",
  },
  {
    title: "Backend Development",
    description:
      "I create scalable APIs and backend systems using Node.js, Express.js, NestJS, authentication, and real-time features.",
  },
  {
    title: "Database Design",
    description:
      "I work with MySQL, PostgreSQL, MongoDB, and Redis, focusing on efficient queries and well-structured data models.",
  },
  {
    title: "Cloud & Deployment",
    description:
      "I deploy and maintain applications using AWS, Docker, CI/CD pipelines, serverless services, and cloud infrastructure.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-slate-50 dark:bg-slate-950 py-16 sm:py-20">
      <Container>
        <section className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            About Me
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-50 sm:text-5xl">
            Building complete products from interface to deployment.
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            I&apos;m a Full Stack Developer focused on building modern,
            scalable, and maintainable web applications across frontend,
            backend, databases, and cloud deployment.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.6fr_0.8fr]">
          <Card>
            <CardHeader>
              <CardTitle>My Story</CardTitle>
            </CardHeader>

            <CardContent className="space-y-5 text-base leading-7 text-slate-600 dark:text-slate-400">
              <p>
                I started my career primarily in backend development, working
                with Node.js, APIs, databases, and production systems.
              </p>

              <p>
                Over time, I expanded into frontend development with React and
                Next.js so I could understand and build complete applications
                rather than focusing on only one layer of the product.
              </p>

              <p>
                Today, I enjoy working across the full stack: designing
                interfaces, developing backend services, structuring databases,
                integrating cloud services, and deploying applications to
                production.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Info</CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">
              <InfoItem label="Role" value="Full Stack Developer" />
              <InfoItem label="Experience" value="4+ Years" />
              <InfoItem label="Location" value="Kerala, India" />
              <InfoItem label="Focus" value="Full Stack & Cloud" />
            </CardContent>
          </Card>
        </section>

        <section className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>What I Do</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {services.map((service) => (
                  <div
                    key={service.title}
                    className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-5"
                  >
                    <h2 className="font-semibold text-slate-950 dark:text-slate-50">
                      {service.title}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </Container>
    </main>
  );
}

function InfoItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-b border-slate-100 pb-4 last:border-none last:pb-0">
      <p className="text-sm text-slate-500">{label}</p>

      <p className="mt-1 font-semibold text-slate-950 dark:text-slate-50">{value}</p>
    </div>
  );
}