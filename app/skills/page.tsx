import Container from "@/components/ui/Container";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

const skillGroups = [
  {
    title: "Frontend",
    description:
      "Building responsive and maintainable user interfaces.",
    skills: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Bootstrap",
    ],
  },

  {
    title: "Backend",
    description:
      "Building scalable APIs, services, and real-time backend systems.",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "Socket.io",
      "RabbitMQ",
    ],
  },

  {
    title: "Databases & ORMs",
    description:
      "Working with relational and NoSQL databases and modern ORM tools.",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Sequelize",
      "Prisma",
    ],
  },

  {
    title: "Cloud & DevOps",
    description:
      "Deploying and maintaining applications using cloud and DevOps tools.",
    skills: [
      "AWS EC2",
      "AWS Lambda",
      "AWS S3",
      "AWS SQS",
      "AWS SES",
      "Docker",
      "GitHub Actions",
      "CI/CD",
    ],
  },

  {
    title: "Architecture & Security",
    description:
      "Designing application architectures and implementing secure authentication.",
    skills: [
      "Microservices",
      "Monolithic Architecture",
      "JWT Authentication",
      "Webhooks",
    ],
  },

  {
    title: "Development Tools",
    description:
      "Tools I use for development, collaboration, testing, and debugging.",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Postman",
      "VS Code",
      "Cursor AI",
    ],
  },
];

const engineeringSkills = [
  "Git",
  "Postman",
  "API Design",
  "Authentication",
  "Authorization",
  "Caching",
  "Performance Optimization",
  "WebSockets",
  "Serverless Architecture",
  "Clean Code",
];

export default function SkillsPage() {
  return (
    <main className="bg-slate-50 dark:bg-slate-950 py-16 sm:py-20">
      <Container>
        <section className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Skills
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-50 sm:text-5xl">
            Technologies I use to build complete web applications.
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            My stack covers modern frontend development, scalable backend
            systems, databases, cloud infrastructure, and application
            deployment.
          </p>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <Card key={group.title}>
              <CardHeader>
                <CardTitle>{group.title}</CardTitle>

                <p className="text-sm leading-6 text-slate-500">
                  {group.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-200 dark:border-slate-800 dark:bg-slate-950 px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Engineering & Tools</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap gap-3">
                {engineeringSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white px-4 py-2 text-sm font-medium text-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </Container>
    </main>
  );
}