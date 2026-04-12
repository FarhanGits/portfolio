import React from "react";
import { PERSONAL_DATA } from "../data/personal_data";
import profile_img from "../img/Foto Wisuda.jpg";

interface ContactProps {
  href: string;
  icon: React.ElementType;
}

function ContactButton({ href, icon: Icon }: ContactProps) {
  return (
    <button className="border-gray-400 border-2 rounded-md p-1 hover:shadow-lg max-sm:rounded-[0.25rem]">
      <a href={href} target="_blank">
        <Icon className="h-5 w-auto stroke-gray-400 max-sm:h-3" />
      </a>
    </button>
  );
}

let contact = PERSONAL_DATA.contact;

function ContactLists() {
  return (
    <div className="flex gap-x-2 mt-3 items-center">
      {/* Email */}
      <ContactButton href={contact.email.address} icon={contact.email.icon} />

      {/* Phone */}
      <ContactButton href={contact.phone.number} icon={contact.phone.icon} />

      {/* Social */}
      {contact.social.map((social) => (
        <ContactButton href={social.url} icon={social.icon} />
      ))}

      {/* Download CV */}
      <a
        href="https://drive.google.com/file/d/1vpVKjDbl0YG4qT9F1AskM23IPBatQD1d"
        target="_blank"
        className="text-sm max-sm:text-xs px-2 py-1 rounded-md bg-slate-800 text-white"
      >
        See My CV
      </a>
    </div>
  );
}

export default function Header() {
  return (
    <header className="flex items-center justify-between h-fit w-full max-sm:flex-col-reverse max-sm:gap-5">
      <div className="flex flex-col max-sm:items-center">
        <h1 className="text-3xl font-bold mb-1 max-sm:text-2xl">
          {PERSONAL_DATA.name}
        </h1>
        <p className="text-base font-medium font-mono text-gray-500 max-sm:text-sm max-sm:text-center">
          {PERSONAL_DATA.about}
        </p>
        <p className="text-sm font-medium font-mono text-gray-500 max-sm:text-xs">
          {PERSONAL_DATA.location}
        </p>
        <ContactLists />
      </div>
      <div className="h-28 aspect-square flex items-end justify-center overflow-hidden rounded-xl">
        <img src={profile_img} alt="Dap" />
      </div>
    </header>
  );
}
