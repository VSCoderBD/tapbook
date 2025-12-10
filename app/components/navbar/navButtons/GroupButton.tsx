"use client";
import Image from "next/image";
import Link from "next/link";

export default function GroupButton() {
return (
<Link href={"/groups"} className="icon-filter">
<Image 
src="/images/nav/group.svg"
alt="Groups"
width={28}
height={28}
/>
</Link>
);
}