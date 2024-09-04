import Image from "next/image";
import React from "react";
import personalLogo from "@/../public/personal-logo.svg";

export function PersonalLogo({ dark }: { dark?: boolean }) {
  return (
    <div>
      <Image
        src={personalLogo}
        alt="Samuel Vasco's personal logo"
        width={32}
        quality={100}
        className={dark ? "invert" : ""}
      />
    </div>
  );
}
