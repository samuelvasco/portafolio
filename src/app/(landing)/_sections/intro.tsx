"use client";
import { ContactButton } from "@/components/composed/contact-button";
import { ResumeButton } from "@/components/composed/resume-button";
import Image from "next/image";
import heroImage from "@/../public/hero.png";
import { SneakPeeks } from "./sneak-peeks";

export function IntroSection() {
  return (
    <section className="relative">
      <Image
        alt="Background image of a man looking at a futuristic city"
        src={heroImage}
        className="-z-10 3xl:rounded-lg"
        quality={100}
        priority
        fill
        style={{
          objectFit: "cover",
          objectPosition: "left",
        }}
      />
      <div className="pt-32 px-8">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Hi, I am Sam
            <br />
            A passionate
            <br />
            Software Developer
            <br />
            Based in Ottawa
          </h1>
        </div>
        <div className="max-w-md mt-8">
          <div className="border-b border-white mb-4"></div>
          <div className="text-white text-xl">
            I am the kind of developer who makes collaboration a pleasure,
            inspiring teams to build outstanding products. With a keen eye for
            quality, I approach every project with the client&apos;s perspective
            in mind, balancing the business goals while prioritizing security,
            scalability, and maintainability. My experience spans from small
            startups to larger companies, allowing me to adapt and excel in
            diverse environments.
          </div>
          <div className="flex flex-col md:flex-row gap-4 pt-4">
            <ContactButton />
            <ResumeButton />
          </div>
        </div>
      </div>

      <SneakPeeks />
    </section>
  );
}
