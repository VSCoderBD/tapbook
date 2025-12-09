"use client"
import React from "react";
import {useDarkMode} from "./hooks/UseDarkMode";
import { navLinks, mainLinks } from "./data/NavButtons";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const {isDark, toggleDarkMode} = useDarkMode();

    return (
        <main>
        <nav className="grid grid-cols-2 sm:grid-cols-[30%,40%,30%] px-4 border-b border-stone-600 bg-nav text-pg items-center">
          <div className="flex justify-start items-center gap-2">
            <a href="/">
                <img className="w-10" src="images/brand/brand.png" />
                <h1 className="hidden">TapBook</h1>
            </a>
            <button className="flex bg-card p-[6px] rounded-full">
              <img src="/images/brand/search.svg" className="w-7 icon-filter" />
              <input
                type="text"
                placeholder="Search TapBook"
                className="hidden lg:inline bg-transparent ml-4 outline-none placeholder:text-sm w-full"
              />
              </button>
          </div>

<ul className="hidden sm:flex justify-between items-center gap-2 mx-2">
  {navLinks.map((link, idx) => (
    <li key={idx} className="group">
      <Link href={link.href}>
        {link.image && (
          <Image
            src={link.image}
            alt={link.title}
            width={32}
            height={32}
            className="border-b-[3px] items-center border-transparent group-hover:border-brand"
          />
        )}
      </Link>
    </li>
  ))}
</ul>
 
        <ul className="flex py-2 justify-end items-center gap-2">
                <button className="bg-card p-[6px] rounded-full">
                  <img src="/images/nav/menu.svg" className="w-7 icon-filter" />
                </button>
          {mainLinks.map((link, idx) => (
            <li key={idx}>
              <Link
                href={link.href}
                className="flex hover:text-primary transition"
              >
                {link.image && (
<div className="bg-card p-2 rounded-full">
  <Image 
    src={link.image} 
    alt={link.title} 
    width={24} 
    height={24} 
    className="icon-filter rounded-full"
  />
</div>
)}
              </Link>
            </li>
          ))}
           <button>
                  <img src="/images/nav/profile.svg" className="w-10 icon-filter rounded-full" />
                </button>
        </ul>

        </nav>
        </main>
    )
}