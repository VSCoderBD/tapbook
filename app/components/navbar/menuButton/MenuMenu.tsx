"use client";
import Image from "next/image";
import Link from "next/link";

export default function MenuMenu() {
return (
<button className="icon-filter">
<Image 
src="/images/nav/menu.svg"
alt="Menu"
width={28}
height={28}
/>
</button>
);
}