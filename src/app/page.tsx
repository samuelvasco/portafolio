import { AboutMeSection } from "./(landing)/_sections/about";
import { ContactMeSection } from "./(landing)/_sections/contact";
import ExperienceSection from "./(landing)/_sections/experience";
import { IntroSection } from "./(landing)/_sections/intro";
import { MyProjectsSection } from "./(landing)/_sections/my-projects";

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <div className="w-full max-w-[1920px] 3xl:pt-20">
        <IntroSection />
        <ExperienceSection />
        <AboutMeSection />
        <MyProjectsSection />
        <ContactMeSection />
      </div>
    </main>
  );
}
