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
        fill={true}
        style={{
          objectFit: "cover",
          objectPosition: "0 -700px",
        }}
      />
      <div className="pt-32 pl-8">
        <div>
          <h1 className="text-7xl font-bold text-white">
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
          <div className="flex flex-row gap-4 pt-4">
            <ContactButton />
            <ResumeButton />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-8 w-full mt-[1000px] pb-16">
        <div className="flex flex-row text-5xl font-bold text-white">
          <h2>I create seamless</h2>
          <RotativeText options={rotativeTextOptions}></RotativeText>
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
            width={800}
            height={635}
            layout="intrinsic"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
}
