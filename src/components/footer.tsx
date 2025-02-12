import { PersonalLogo } from "./personal-logo";

export function Footer() {
  return (
    <>
      <footer className="flex flex-col justify-center items-center gap-2 bg-black p-8 text-white">
        <PersonalLogo dark />
        <p>Made with ❤️ by yours truly </p>
        <p>
          Vectors by&nbsp;
          <a
            href="https://www.freepik.com"
            target="_blank"
            className="text-sky-500"
          >
            Freepik
          </a>
          &nbsp;and&nbsp;
          <a
            href="https://lottiefiles.com/free-animation/network-J2PqABlyq1"
            target="_blank"
            className="text-sky-500"
          >
            Lottiefiles
          </a>
        </p>
        <p>Copyright © 2025</p>
      </footer>
    </>
  );
}
