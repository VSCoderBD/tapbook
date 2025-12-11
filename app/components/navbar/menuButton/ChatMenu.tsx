"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ChatButton() {
  const pathname = usePathname();
  const active = pathname === "/chat";

  return (
    <Link
      href="/chat"
      className="relative w-full h-full flex flex-col items-center justify-center"
    >
      <Image
        src="/images/nav/chat.svg"
        alt="Chat"
        width={28}
        height={28}
        className={`${active ? "" : "icon-filter"}`}
      />
    </Link>
  );
}
