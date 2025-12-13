"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotificationButton() {
  const pathname = usePathname();
  const active = pathname === "/notifications";

  return (
    <Link
      href="/notifications"
      className="relative w-full h-full flex flex-col items-center justify-center"
    >
      <Image
        src="/images/nav/notification.svg"
        alt="Notification"
        width={28}
        height={28}
        className={`${active ? "" : "icon-filter"}`}
      />
    </Link>
  );
}
