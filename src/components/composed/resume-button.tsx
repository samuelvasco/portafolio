import { Download } from "lucide-react";
import { Button } from "../ui/button";

export function ResumeButton() {
  return (
    <>
      <Button className="flex items-center gap-2">
        <a
          href="/resume.pdf"
          download="samuel-vasco-resume.pdf"
          className="flex items-center gap-2 text-white"
        >
          Resume
          <Download className="w-4 h-4" />
        </a>
      </Button>
    </>
  );
}
