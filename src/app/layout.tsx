import { Sora as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Samuel Vasco's Portfolio",
  description:
    "Experienced software engineer specializing in full stack development with expertise in AWS, TypeScript, Python, React, and Next.js.",
  icons: [
    { rel: "icon", type: "image/png", sizes: "54x44", url: "/favicon.ico" },
  ],
  keywords:
    "Samuel Vasco, software engineer, senior software engineer, web developer, AWS, TypeScript, Python, SaaS, React, full stack developer, frontend developer, backend developer, Tailwind CSS, CSS, HTML, Next.js, microservices, Sennder, Sennder GmbH, Atlas Real Estate Analytics, Ottawa, Canada, Ontario, Toronto, user experience, UI/UX, API development, REST API, Kafka, Flink, Docker, Linux, Agile development, cloud computing, DevOps, scalable systems, CI/CD, Terraform",
};

export default function NavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
