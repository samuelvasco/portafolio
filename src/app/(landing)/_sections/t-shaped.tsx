import Image from "next/image";
import React from "react";
import tShapedImage from "@/../public/t-shaped.png";

export default function TShapedSection() {
  return (
    <section
      className={
        "flex flex-col p-8 md:px-32 gap-8 " +
        "bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      }
    >
      <div className="flex flex-col gap-4 md:text-center">
        <h2 className="text-4xl font-bold">I am a T-Shaped Developer</h2>
        <p className="text-slate-500">
          While I enjoy exploring a wide range of technologies, I recognize the
          value of deep expertise in a specific domain. I&apos;ve chosen to
          specialize in backend development, where I focus on designing robust
          architectures and selecting the most appropriate technologies. This
          approach allows me to craft optimal solutions that balance innovation
          with practicality, ensuring efficient and scalable systems
        </p>
      </div>

      <div className="flex justify-center">
        <Image
          alt="Graphic of technologies icons in a t shape"
          src={tShapedImage}
          width={800}
          height={0}
          quality={100}
        />
      </div>
    </section>
  );
}
