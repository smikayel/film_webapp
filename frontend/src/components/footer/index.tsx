import React from "react";

const socials = [
  {
    alt: "facebook",
    src: "/socials/facebook.svg",
  },
  {
    alt: "linkedin",
    src: "/socials/linkedin.svg",
  },
  {
    alt: "dribbble",
    src: "/socials/dribbble.svg",
  },
  {
    alt: "instagram",
    src: "/socials/instagram.svg",
  },
];

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-zinc-950 py-8">
      <div>
        <img
          className="w-[150px] h-auto"
          src="/appLogos/footer-logo.svg"
          alt="Logo"
        />
      </div>
      <div className="text-white leading-tight p-4">
        <p>© Copyright 2023 HelloMovies. All Rights Reserved</p>
      </div>
      <div className="flex justify-between gap-4">
        {socials.map((social) => {
          return <img src={social.src} className="h-[25px]" alt={social.alt}/>;
        })}
      </div>
    </footer>
  );
}
