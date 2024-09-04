import Image from "next/image";

export function AboutMeSection() {
  return (
    <section>
      <div className="flex flex-col items-center md:grid md:grid-cols-2 gap-4 p-8 md:p-32">
        <div>
          <Image
            src="/network.svg"
            alt="Network of lines and dots"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-5xl font-bold">About Me</h2>
          <div className="flex flex-col gap-4 text-slate-500">
            <p>
              I am enthusiastic about my work and driven by a love for learning.
              I find great satisfaction in solving problems and using my skills
              to create useful solutions. My specialty is taking charge of
              projects from the very beginning and seeing them through to
              successful completion, always aiming for the highest quality.
            </p>
            <p>
              I believe collaboration and teamwork are essential for any
              project&apos;s success. Working closely with others helps to bring
              out the best ideas and ensures that everyone is on the same page.
              This approach has always helped me deliver better results.
            </p>
            <p>
              When making decisions, I always consider the user&apos;s
              perspective and the impact on the business. I believe that
              understanding the needs of users and the goals of the business
              leads to better and more effective solutions. This user-focused
              approach has always guided my work and helped me deliver products
              that meet and exceed expectations.
            </p>
            <p>
              That&apos;s a bit about me, contact me and let&apos;s innovate
              together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
