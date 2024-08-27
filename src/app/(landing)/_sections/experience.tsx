import Card from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { experienceOptions as options } from "@/constants/experience";

export default function ExperienceSection() {
  return (
    <section className="flex flex-col items-center p-32 gap-16 text-white bg-black w-full h-full">
      <div>
        <h2 className="text-5xl font-bold">My Experience</h2>
      </div>

      <div className="flex flex-col gap-8">
        {options.map((option) => (
          <Card key={option.id}>
            <a
              href={option.url}
              style={{ textDecoration: "none", color: "inherit" }}
              target="_blank"
            >
              <div className="flex flex-col gap-8">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row gap-4 items-center">
                    <Image src={option.src} alt={option.alt} width={32}></Image>
                    <h3 className="text-2xl font-bold">{option.name}</h3>
                  </div>
                  <p>{option.date}</p>
                </div>
                <div>
                  <p>{option.description}</p>
                </div>
              </div>
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}
