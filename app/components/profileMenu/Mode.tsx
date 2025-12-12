"use client";

import Image from "next/image";
import { useState } from "react";
import { useDarkMode } from "../hooks/UseDarkMode";

type ThemeType = "system" | "light" | "dark";

export default function DisplayMenu() {
  const [open, setOpen] = useState(false);

  const { theme, setLightMode, setDarkMode, setSystemMode } = useDarkMode();

  const themeText: Record<ThemeType, string> = {
    system: "Auto",
    light: "Light Mode",
    dark: "Dark Mode",
  };

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
          <p className="text-sm">Display</p>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-xs opacity-70">{themeText[theme as ThemeType]}</p>
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

      {/* Dropdown */}
      <div
        className={`
          left-0 w-full bg-card rounded-xl shadow-lg overflow-hidden
          transition-all duration-300 ease-in-out
          ${open ? "max-h-48 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"}
        `}
      >
        <div className="flex flex-col p-2 bg-card rounded-lg">

          {/* SYSTEM */}
          <button
            onClick={() => {
              setSystemMode();
              setOpen(false);
            }}
            className="p-2 hover:bg-cardHover rounded flex justify-between items-center"
          >
            <span>System Default</span>
            {theme === "system" && (
              <span className="w-3 h-3 bg-brand rounded-full"></span>
            )}
          </button>

          {/* LIGHT */}
          <button
            onClick={() => {
              setLightMode();
              setOpen(false);
            }}
            className="p-2 hover:bg-cardHover rounded flex justify-between items-center"
          >
            <span>Light Mode</span>
            {theme === "light" && (
              <span className="w-3 h-3 bg-brand rounded-full"></span>
            )}
          </button>

          {/* DARK */}
          <button
            onClick={() => {
              setDarkMode();
              setOpen(false);
            }}
            className="p-2 hover:bg-cardHover rounded flex justify-between items-center"
          >
            <span>Dark Mode</span>
            {theme === "dark" && (
              <span className="w-3 h-3 bg-brand rounded-full"></span>
            )}
          </button>

        </div>
      </div>
    </div>
  );
}
