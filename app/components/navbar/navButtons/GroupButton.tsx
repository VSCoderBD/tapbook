"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GroupButton() {
  const pathname = usePathname();
  const active = pathname === "/group";

  return (
    <Link
      href="/group"
      className="relative w-full h-full flex flex-col items-center justify-center"
    >
      <Image
        src="/images/nav/group.svg"
        alt="Group"
        width={28}
        height={28}
        className={`${active ? "" : "icon-filter"}`}
      />

      {active && (
<span className="hidden sm:block absolute -bottom-[3px] left-0 w-full h-[3px] bg-brand"></span>
      )}
    </Link>
  );
}
