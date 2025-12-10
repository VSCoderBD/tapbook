"use client";
import Image from "next/image";
import Link from "next/link";

export default function ChatButton() {
return (
<Link href={"/chat"} className="icon-filter">
<Image 
src="/images/nav/chat.svg"
alt="Chat"
width={28}
height={28}
/>
</Link>
);
}