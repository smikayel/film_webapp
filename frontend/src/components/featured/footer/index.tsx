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
    <footer className="flex flex-col">
      <section className="self-stretch flex flex-col bg-zinc-950 p-5 max-md:max-w-full">
        <div className="self-center flex w-full max-w-[1456px] flex-row items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <section className="self-stretch flex flex-row items-start gap-4 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <img
              loading="lazy"
              srcSet="/appLogos/footer-logo.svg"
              className="aspect-[6.13] object-cover object-center w-[147px] self-center shrink-0"
              alt="helo movie"
            />
            <a
              href="..."
              className="text-sky-200 text-center text-xl leading-[normal] self-stretch"
            >
              {" "}
              |{" "}
            </a>
            <div className="text-slate-200 text-sm font-light leading-5 max-w-auto self-center mt-0.5">
              {" "}
              © Copyright 2023 HelloMovies. All Rights Reserved
            </div>
          </section>
          <div className="w-auto flex justify-between gap-4">
            {socials.map((social) => {
              return (
                <img
                  src={social.src}
                  className="h-[25px]"
                  alt={social.alt}
                  key={social.src}
                />
              );
            })}
          </div>
        </div>
      </section>
    </footer>
  );
}
