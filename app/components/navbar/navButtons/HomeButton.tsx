"use client";
import Image from "next/image";
import Link from "next/link";

export default function HomeButton() {
return (
<Link href={"/"} className="icon-filter">
<Image 
src="/images/nav/home.svg"
alt="Home"
width={28}
height={28}
/>
</Link>
);
}