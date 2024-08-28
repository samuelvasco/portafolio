import Image from "next/image";
import { myProjectsOptions } from "@/constants/copy";

export function MyProjectsSection() {
  return (
    <section id="my-projects" className="bg-black text-white p-8 md:p-32">
      <div className="flex justify-center mb-16">
        <h2 className="text-4xl font-bold">My Projects</h2>
      </div>

      {myProjectsOptions.map((option) => (
        <div
          className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-16 items-center"
          key={option.id}
        >
          <div
            className={`flex justify-center ${
              option.index % 2 && "md:order-last"
            }`}
          >
            <Image src={option.src} alt={option.alt} width={500} height={500} />
          </div>
          <div className="flex flex-col gap-8 ">
            <h3 className="text-4xl font-bold">{option.index + 1}</h3>
            <h4 className="text-3xl font-bold">{option.title}</h4>
            <p>{option.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
