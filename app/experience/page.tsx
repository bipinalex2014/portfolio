import Container from "@/components/ui/Container";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

const experiences = [
  {
    role: "Freelance Full Stack Developer",
    company: "Freelance",
    period: "October 2025 — Present",
    description:
      "Developing backend APIs, web applications, and websites based on client requirements while maintaining and optimizing existing applications.",
    responsibilities: [
      "Develop backend APIs, web applications, and websites.",
      "Gather client requirements and deliver customized software solutions.",
      "Fix bugs, optimize performance, and maintain existing applications.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "REST APIs",
      "Databases",
      "AWS",
    ],
  },

  {
    role: "Software Engineer — Node.js Backend Developer",
    company: "Ateam Soft Solution",
    location: "Technopark, Trivandrum, Kerala",
    period: "February 2025 — October 2025",
    description:
      "Worked on scalable backend systems for an e-commerce platform with payments, caching, containerization, and cloud deployment.",
    responsibilities: [
      "Revamped an e-commerce platform using Node.js, Express.js, and REST APIs for product, cart, and order management.",
      "Built backend systems using MySQL with Sequelize ORM and Redis.",
      "Implemented JWT authentication and integrated Viva Wallet and Worldpay payment gateways using webhooks.",
      "Deployed containerized services on AWS using Docker and GitHub Actions CI/CD.",
    ],
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
  },

  {
    role: "Software Engineer — Node.js Backend Developer",
    company: "NOA Infosolutions LLP",
    location: "Infopark, Kochi, Kerala",
    period: "April 2022 — September 2024",
    description:
      "Contributed to healthcare products including NOA Care, PMS, and FMC by developing backend systems and scalable APIs.",
    responsibilities: [
      "Developed backend systems for job management, timesheets, and workforce tracking.",
      "Designed and optimized RESTful APIs.",
      "Built SQL/MySQL and NoSQL data solutions.",
      "Worked with scalable microservices architecture.",
      "Integrated Socket.io for real-time functionality.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MySQL",
      "REST APIs",
      "Microservices",
      "Socket.io",
    ],
  },

  {
    role: "Junior Software Developer — Node.js Developer",
    company: "Redeemer Technologies Pvt Ltd",
    location: "Technopark, Kollam, Kerala",
    period: "April 2021 — December 2021",
    description:
      "Worked on a role-based web application for Zayan Gold Jewellery with authentication, backend APIs, and responsive frontend interfaces.",
    responsibilities: [
      "Developed secure JWT-based authentication.",
      "Built separate admin and user functionality.",
      "Developed RESTful APIs using Node.js and Express.js.",
      "Worked with MongoDB for application data.",
      "Created responsive frontend interfaces using React.js and Bootstrap.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React.js",
      "Bootstrap",
      "JWT",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main className="bg-slate-50 dark:bg-slate-950 py-16 sm:py-20">
      <Container>
        {/* Page heading */}
        <section className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Experience
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-50 sm:text-5xl">
            My professional journey.
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            From backend development to full-stack engineering, I&apos;ve
            worked on healthcare products, e-commerce systems, and client
            applications.
          </p>
        </section>

        {/* Timeline */}
        <section className="relative mt-12">
          <div className="absolute bottom-0 left-[7px] top-0 hidden w-px bg-slate-200 sm:block" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={`${experience.company}-${experience.period}`}
                className="relative sm:pl-10"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-8 hidden h-[15px] w-[15px] rounded-full border-4 border-blue-100 bg-blue-600 sm:block" />

                <Card>
                  <CardHeader>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-sm font-semibold text-blue-600">
                          {experience.company}
                        </p>

                        <CardTitle className="mt-2 text-xl">
                          {experience.role}
                        </CardTitle>

                        {experience.location && (
                          <p className="mt-2 text-sm text-slate-500">
                            {experience.location}
                          </p>
                        )}
                      </div>

                      <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-600">
                        {experience.period}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="max-w-4xl leading-7 text-slate-600 dark:text-slate-400">
                      {experience.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {experience.responsibilities.map((responsibility) => (
                        <li
                          key={responsibility}
                          className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-400"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />

                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-400"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}