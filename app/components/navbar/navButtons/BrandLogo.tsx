"use client";
import Image from "next/image";
import Link from "next/link";

export default function BrandLogo() {
return (
<Link href={"/"} className="icon-filter">
<Image 
src="/images/brand/brand.png"
alt="Brand Logo"
width={28}
height={28}
/>
</Link>
);
}