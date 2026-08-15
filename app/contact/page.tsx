"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, ExternalLink, Phone } from "lucide-react";

import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);

    // We'll connect this to an email service later.

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <main className="bg-slate-50 dark:bg-slate-950 py-16 sm:py-20">
      <Container>
        <section className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Contact
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight dark:text-slate-50 sm:text-5xl">
            Let&apos;s build something together.
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Have a project, opportunity, or idea you&apos;d like to discuss?
            Send me a message and I&apos;ll get back to you.
          </p>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Card>
            <CardHeader>
              <CardTitle>Contact Details</CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              <ContactItem
                icon={<Mail className="h-5 w-5" />}
                label="Email"
                value="bipinalex2014@gmail.com"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=bipinalex2014@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              />

              <ContactItem
                icon={<ExternalLink className="h-5 w-5" />}
                label="LinkedIn"
                value="Connect on LinkedIn"
                href="https://www.linkedin.com/in/bipin-alex-a921321a3/"
              />

              <ContactItem
                icon={<MapPin className="h-5 w-5" />}
                label="Location"
                value="Kollam, Kerala, India"
              />

              <ContactItem
                icon={<Phone className="h-5 w-5" />}
                label="Phone"
                value="+91 9961646116"
                href="tel:+919876543210"
              />
            </CardContent>
          </Card>

          {/* <Card>
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-700"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-700"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-700"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="mt-2 w-full resize-none rounded-xl border border-slate-200 dark:border-slate-800 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card> */}
        </section>
      </Container>
    </main>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
  target,
  rel
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  target?: string;
  rel?: string;
}) {
  const content = (
    <div className="flex items-center gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {label}
        </p>

        <p className="mt-1 break-words font-medium text-slate-950 dark:text-slate-100">
          {value}
        </p>
      </div>
    </div>
  );

  if (!href) {
    return (
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
        {content}
      </div>
    );
  }

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="block rounded-xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-blue-200 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-blue-500/40 dark:hover:bg-slate-700"
    >
      {content}
    </a>
  );
}