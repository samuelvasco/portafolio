import { LucideMail } from "lucide-react";
import Image from "next/image";
import linkedingSvg from "@/../public/linkedin.svg";
import githubSvg from "@/../public/github.svg";
import {
  CONTACT_EMAIL,
  GITHUB,
  LINKEDIN,
  EMAIL_SUBJECT,
} from "@/constants/contact-info";

export function ContactMeSection() {
  return (
    <section>
      <div className="grid grid-cols-2 p-32 gap-32">
        <div className="flex flex-col justify-center gap-4">
          <div>
            <h3 className="text-5xl font-bold">Let&apos;s build</h3>
            <h3 className="text-5xl font-bold">the future together</h3>
          </div>
          <p className="text-slate-500">
            I&apos;m passionate about creating innovative solutions that drive
            growth and deliver exceptional user experiences. Let&apos;s
            collaborate to turn bold ideas into reality.
          </p>
        </div>
        <div className="flex flex-row w-full items-center justify-center">
          <div className="flex flex-row gap-4 bg-slate-100 rounded-md drop-shadow p-4 w-fit">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${EMAIL_SUBJECT}`}
              aria-label="Send me an email"
            >
              <LucideMail className="w-8 h-8" />
            </a>
            <a href={LINKEDIN} target="_blank">
              <Image
                src={linkedingSvg}
                alt="linkedin logo"
                className="w-8 h-8"
              />
            </a>
            <a href={GITHUB} target="_blank">
              <Image src={githubSvg} alt="github logo" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
