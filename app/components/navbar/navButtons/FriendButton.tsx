"use client";
import Image from "next/image";
import Link from "next/link";

export default function FriendButton() {
return (
<Link href="../friends" className="icon-filter">
<Image 
src="/images/nav/friend.svg"
alt="Friends"
width={28}
height={28}
/>
</Link>
);
}