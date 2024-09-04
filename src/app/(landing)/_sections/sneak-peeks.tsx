import { RotativeText } from "@/components/ui/rotative-text";
import sennderSneakPeek from "@/../public/sennder-sneak-peek.webp";
import atlasSneakPeek from "@/../public/atlas-sneak-peek.png";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const options = [
  {
    id: "sennder",
    name: "Sennder",
    alt: "Sennder application sneakpeak image",
    src: sennderSneakPeek,
  },
  {
    id: "atlas",
    name: "Atlas Real Estate Analytics",
    alt: "Atlas application sneakpeak image",
    src: atlasSneakPeek,
  },
];

const rotativeTextOptions = [
  { id: 1, content: "experiences" },
  { id: 2, content: "journeys" },
  { id: 3, content: "solutions" },
  { id: 4, content: "integrations" },
  { id: 5, content: "workflows" },
];

export function SneakPeeks() {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    api?.on("select", () => {
      setSelectedOption(api.canScrollNext() ? options[0] : options[1]);
    });
  }, [api]);

  return (
    <div>
      <div className="flex flex-col md:items-center md:justify-center gap-8 md:gap-4 w-full mt-[64vh] pb-16 px-8">
        <div className="flex flex-col md:flex-row gap-2 text-5xl font-bold text-white">
          <h2>I create seamless</h2>
          <RotativeText
            options={rotativeTextOptions}
            className="w-64 h-[3rem]"
          ></RotativeText>
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          {options.map((option) => (
            <h3
              key={option.id}
              className={`text-lg font-bold cursor-pointer text-white ${
                option.id === selectedOption.id ? "" : "text-opacity-50"
              }`}
              onClick={() =>
                api?.canScrollNext() ? api?.scrollNext() : api?.scrollPrev()
              }
            >
              {option.name}
            </h3>
          ))}
        </div>
        <div>
          <Carousel setApi={setApi}>
            <CarouselContent>
              {options.map((option) => (
                <CarouselItem key={option.id} className="flex justify-center">
                  <Image
                    key={option.id}
                    alt={option.alt}
                    src={option.src}
                    width={800}
                    height={0}
                    quality={100}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
