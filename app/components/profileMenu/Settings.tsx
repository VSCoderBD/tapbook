"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function SettingsMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Main button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex cursor-pointer justify-between w-full items-center"
      >
        <div className="flex group items-center gap-2">
          <div className="bg-card p-1.5 rounded-full">
            <Image
              src="/images/profilemenu/mode.svg"
              alt="Display Mode"
              width={20}
              height={20}
              className="icon-filter"
            />
          </div>
          <p className="text-sm">Settings & privacy</p>
        </div>

        <div className="flex items-center gap-2">
        
        <Image
          src="/images/profilemenu/forward.svg"
          alt="Arrow"
          width={20}
          height={20}
          className={`icon-filter transition-transform duration-200 ${
            open ? "rotate-90" : "rotate-0"
          }`}
        />
        </div>
      </button>

 <div
        className={`
          left-0 w-full bg-card rounded-xl shadow-lg overflow-hidden
          transition-all duration-300 ease-in-out
          ${open ? "max-h-48 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"}
        `}
      >
        <div className="flex flex-col p-2 bg-card rounded-lg">
       <a 
       className="p-2"
       href={"/friends"}>
       <p>Genaral</p>
       </a>
       <a 
       className="p-2"
       href={"/friends"}>
       <p>Privecy</p>
       </a>
        </div>
      </div>
    </div>
  );
}
