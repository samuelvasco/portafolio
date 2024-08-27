import { Button } from "./ui/button";
import { ResumeButton } from "./composed/resume-button";
import { ContactButton } from "./composed/contact-button";
import { PersonalLogo } from "./personal-logo";

export function Navbar() {
  return (
    <header className="fixed w-full flex justify-center z-10">
      <nav className="flex flex-row justify-between p-4 items-center w-full max-w-[1920px]">
        <div className="flex flex-row gap-2 items-center p-2 bg-white rounded-md">
          <PersonalLogo />
          <ContactButton />
        </div>
        <div className="flex flex-row gap-4 items-center p-2 bg-white rounded-md">
          <Button variant={"outline"} className="border-none">
            Projects
          </Button>
          <ResumeButton />
        </div>
      </nav>
    </header>
  );
}
