"use client";
import Image from "next/image";
import Link from "next/link";

export default function NotificationButton() {
return (
<Link href={"/notifications"} className="icon-filter">
<Image 
src="/images/nav/notification.svg"
alt="Notification"
width={28}
height={28}
/>
</Link>
);
}