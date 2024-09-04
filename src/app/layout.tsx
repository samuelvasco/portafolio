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
  title: "Samuel Vasco",
  description:
    "Experienced software engineer specialized in full stack development with expertise in AWS, TypeScript, Python, React, and Next.js.",
  icons: [
    { rel: "icon", type: "image/png", sizes: "54x44", url: "/favicon.ico" },
  ],
  keywords:
    "Samuel Vasco, software engineer, senior software engineer, web developer, AWS, TypeScript, Python, SaaS, React, full stack developer, frontend developer, backend developer, Tailwind CSS, CSS, HTML, Next.js, microservices, Sennder, Sennder GmbH, Atlas Real Estate Analytics, Ottawa, Canada, Ontario, Toronto, user experience, UI/UX, API development, REST API, Kafka, Flink, Docker, Linux, Agile development, cloud computing, DevOps, scalable systems, CI/CD, Terraform",
  authors: [{ name: "Samuel Vasco", url: "https://samuelvasco.com" }],
  creator: "Samuel Vasco",
  publisher: "Samuel Vasco",
  applicationName: "Samuel Vasco",
  appleWebApp: true,
  alternates: {
    canonical: "https://samuelvasco.com",
  },
  robots: {
    index: true,
    follow: false,
    googleBot: {
      index: true,
      follow: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Samuel Vasco",
    description:
      "Experienced software engineer specialized in full stack development with expertise in AWS, TypeScript, Python, React, and Next.js.",
    url: "https://samuelvasco.com",
    siteName: "Samuel Vasco",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://samuelvasco.com/sneakpeek.jpg",
        secureUrl: "https://samuelvasco.com/sneakpeek.jpg",
        width: 1024,
        height: 1024,
        alt: "Samuel Vasco's portafolio sneak peek image",
      },
    ],
  },
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
          "min-h-screen bg-background font-sans antialiased scroll-smooth",
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
