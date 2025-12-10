"use client";
import Image from "next/image";
import Link from "next/link";

export default function VideoButton() {
return (
<Link href={"/videos"} className="icon-filter">
<Image 
src="/images/nav/video.svg"
alt="Videos"
width={28}
height={28}
/>
</Link>
);
}