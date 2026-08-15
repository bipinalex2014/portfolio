import Container from "@/components/ui/Container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

const projects = [
  {
    title: "Healthcare Platforms",
    subtitle: "NOA Care, PMS, FMC",
    description:
      "Backend development for healthcare platforms covering job management, timesheets, workforce tracking, real-time features, and scalable API systems.",
    technologies: [
      "Node.js",
      "Express.js",
      "MySQL",
      "REST APIs",
      "Microservices",
      "Socket.io",
    ],
    featured: true,
  },
  {
    title: "E-commerce Platform",
    subtitle: "Ateam Soft Solution",
    description:
      "Revamped an e-commerce platform with product, cart, and order management, payment gateway integrations, caching, containerized deployment, and CI/CD.",
    technologies: [
      "Node.js",
      "Express.js",
      "MySQL",
      "Sequelize",
      "Redis",
      "Docker",
      "AWS",
      "GitHub Actions",
    ],
    featured: true,
  },
  // {
  //   title: "Zayan Gold Jewellery",
  //   subtitle: "Role-Based Web Application",
  //   description:
  //     "Built a secure full-stack application with separate admin and user interfaces, JWT authentication, customer management, and responsive frontend screens.",
  //   technologies: [
  //     "Node.js",
  //     "Express.js",
  //     "MongoDB",
  //     "React.js",
  //     "Bootstrap",
  //     "JWT",
  //   ],
  //   featured: false,
  // },
  {
    title: "Bondim",
    subtitle: "Event Discovery & Social Networking App",
    description:
        "Developed a full-stack event discovery and social networking platform with event creation, booking, recurring events, payments, notifications, media uploads, user interactions, and cloud-based deployment.",
    technologies: [
        "React.js",
        "Node.js",
        "AWS Lambda",
        "MySQL",
        "S3",
        "Razorpay",
        "WebSockets",
        "JWT",
    ],
    featured: true,
    liveUrl: "https://bondifyindia.com/bondim",
  },
  {
    title: "Freelance Full Stack Projects",
    subtitle: "Custom Client Solutions",
    description:
      "Developed backend APIs, web applications, and websites based on client requirements, including bug fixing, maintenance, and performance optimization.",
    technologies: [
      "React.js",
      "Node.js",
      "APIs",
      "Databases",
      "Deployment",
    ],
    featured: false,
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-slate-50 dark:bg-slate-950 py-16 sm:py-20">
      <Container>
        <section className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Projects
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-50 sm:text-5xl">
            Projects and products I&apos;ve helped build.
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            A selection of backend, full-stack, cloud, and production systems
            I&apos;ve worked on across healthcare, e-commerce, and client
            projects.
          </p>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className={project.featured ? "lg:min-h-[360px]" : ""}
            >
              <CardHeader>
                <CardDescription className="font-medium text-blue-600">
                  {project.subtitle}
                </CardDescription>

                <CardTitle className="text-2xl">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="leading-7 text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <button className="mt-8 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700">
                  View Details →
                </button>
              </CardContent>
            </Card>
          ))}
        </section>
      </Container>
    </main>
  );
}