"use client";
import Image from "next/image";
import Link from "next/link";

export default function SearchButton() {
return (
<button className="flex justify-center bg-card p-2 rounded-full gap-2 items-center sm:hover:bg-cardHover">

<Image 
src="/images/nav/search.svg"
alt="Search"
width={20}
height={20}
className="icon-filter"
/>
          <input
        type="text"
        placeholder="Search"
        className="hidden lg:block bg-transparent outline-none w-full h-full text-sm"
        ></input>
</button>
);
}