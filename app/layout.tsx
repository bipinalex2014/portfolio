import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import ThemeProvider from "@/components/theme/ThemeProvider";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Bipin Alex | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, NestJS, SQL, NoSQL, and Cloud.",
  verification: {
    google: "ZZFoxBteQSQ8b7pHnJByQhDaCB4tA3rZpre_hLLxbOg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.variable}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}