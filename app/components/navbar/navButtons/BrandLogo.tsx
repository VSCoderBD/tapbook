"use client";
import Image from "next/image";
import Link from "next/link";

export default function BrandLogo() {
return (
<Link href={"/"} >
<Image 
src="/images/brand/logo.png"
alt="Brand Logo"
width={37}
height={37}
className="rounded-full"
/>
</Link>
);
}