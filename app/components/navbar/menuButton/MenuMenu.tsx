"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NotificationButton() {
  const pathname = usePathname();
  const active = pathname === "/notifications";
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between w-full group cursor-pointer">
    <div className="flex items-center text-sm gap-2">
    <button
      
      className="relative bg-card sm:group-hover:bg-cardHover p-1 rounded-full sm:w-full sm:h-full flex sm:flex-col sm:items-center sm:justify-center"
    >
      <Image
        src="/images/nav/menu.svg"
        alt="Menu"
        width={28}
        height={28}
        className={`${active ? "" : "icon-filter"} w-full sm:w-[29px] h-full`}
      />
    </button>
    <p className="sm:hidden">Deshboard</p>
    </div>

    <div className="flex sm:hidden items-center gap-2">
            <Image
              src="/images/profilemenu/forward.svg"
              alt="Arrow"
              width={20}
              height={20}
              className={`icon-filter sm:transition-transform sm:duration-200 ${
                open ? "rotate-90" : "rotate-0"
              }`}
            />
            </div>
    </div>
  );
}
