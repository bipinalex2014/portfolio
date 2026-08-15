import Container from "@/components/ui/Container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Mail, ExternalLink } from "lucide-react";
import Link from "next/link";
import ResumeButton from "../layout/ResumeButton";
const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "NestJS",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "AWS",
];

export default function BentoHome() {
  return (
    <section id="home" className="bg-slate-50 dark:bg-slate-950 py-16">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardContent className="flex min-h-[320px] flex-col justify-center p-8 sm:p-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Full Stack Developer
              </p>

              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-50 sm:text-5xl">
                Hi, I&apos;m{" "}
                <span className="text-blue-600">Bipin Alex.</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
                I build complete web applications from responsive React and
                Next.js interfaces to scalable Node.js APIs, databases, and
                cloud deployment.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg">View My Work</Button>
                <ResumeButton />
              </div>
            </CardContent>
          </Card>

          <Card id="about">
            <CardHeader>
              <CardTitle>About Me</CardTitle>

              <CardDescription>
                A quick introduction to what I do.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <p className="leading-7 text-slate-600 dark:text-slate-400">
                I&apos;m a Full Stack Developer focused on modern frontend
                development, backend systems, databases, and production
                deployment.
              </p>

              <Link
                href="/about"
                className="mt-6 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Read More →
              </Link>
            </CardContent>
          </Card>

          <Card id="projects">
            <CardHeader>
              <CardDescription className="font-medium text-blue-600">
                Featured Project
              </CardDescription>

              <CardTitle>Bondify</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="leading-6 text-slate-600 dark:text-slate-400">
                An event discovery, booking, and management platform with
                payments, notifications, recurring events, and cloud-based
                media handling.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Node.js", "React", "AWS", "MySQL"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-800"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <Link
                href="/projects"
                className="mt-6 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                View Project →
              </Link>
            </CardContent>
          </Card>

          <Card id="skills">
            <CardHeader>
              <CardTitle>My Stack</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap gap-2">
                {techStack.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <Link
                href="/skills"
               className="mt-6 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700">
                View All Skills →
              </Link>
            </CardContent>
          </Card>

          <Card id="contact">
            <CardHeader>
              <CardTitle>Connect With Me</CardTitle>

              <CardDescription>
                Let&apos;s build something together.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/bipinalex2014"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                >
                  <ExternalLink className="h-4 w-4" />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/bipin-alex-a921321a3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                >
                  <ExternalLink className="h-4 w-4" />
                  LinkedIn
                </a>

                {/* Email */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=bipinalex2014@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}