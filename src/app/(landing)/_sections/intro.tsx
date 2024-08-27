"use client";
import { ContactButton } from "@/components/composed/contact-button";
import { ResumeButton } from "@/components/composed/resume-button";
import { RotativeText } from "@/components/ui/rotative-text";
import Image from "next/image";
import { useState } from "react";

const rotativeTextOptions = [
  { id: 1, content: "experiences" },
  { id: 2, content: "journeys" },
  { id: 3, content: "solutions" },
  { id: 4, content: "integrations" },
  { id: 5, content: "workflows" },
];

const options = [
  {
    id: "sennder",
    name: "Sennder",
    alt: "sennder-sneakpeak",
    src: "/sennder.webp",
  },
  {
    id: "atlas",
    name: "Atlas Real Estate Analytics",
    alt: "atlas-sneakpeak",
    src: "/atlas.png",
  },
];

export function IntroSection() {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <section className="relative">
      <Image
        alt="hero background image"
        src={"/hero.png"}
        className="-z-10 3xl:rounded-lg"
        fill
        style={{
          objectFit: "cover",
        }}
      />
      <div className="pt-32 px-8">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Hi, my name is Sam
            <br />
            Software Engineer
            <br />
            Based in Ottawa
          </h1>
        </div>
        <div className="max-w-md mt-8">
          <div className="border-b border-white mb-4"></div>
          <div className="text-white text-xl">
            I am the kind of engineer who makes collaboration a pleasure,
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

      <div className="flex flex-col items-center justify-center gap-16 md:gap-8 w-full mt-[64vh] pb-16 px-8">
        <div className="flex flex-col md:flex-row gap-2 text-5xl font-bold text-white">
          <h2>I create seamless</h2>
          <RotativeText
            options={rotativeTextOptions}
            className="w-64"
          ></RotativeText>
        </div>
        <div className="flex flex-row gap-4 ">
          {options.map((option) => (
            <h3
              key={option.id}
              className={`text-lg font-bold cursor-pointer text-white ${
                option.id === selectedOption.id ? "" : "text-opacity-50"
              }`}
              onClick={() => setSelectedOption(option)}
            >
              {option.name}
            </h3>
          ))}
        </div>
        <div>
          <Image
            alt={selectedOption.alt}
            src={selectedOption.src}
            width={0}
            height={0}
            sizes="180vw"
            style={{ width: "100%", height: "auto" }}
            layout="intrinsic"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
}
