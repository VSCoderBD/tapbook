"use client"
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function LogOut() {
  const pathname = usePathname();

  return (
    <div className="flex cursor-pointer justify-between w-full">
    <div className="flex group items-center gap-2">
        <div className="bg-card p-1.5 rounded-full">
      <Image
        src="/images/profilemenu/mode.svg"
        alt="Friend"
        width={20}
        height={20}
        className="icon-filter"
      />
      </div>
        <p className="text-sm">Display & accessibility</p>
    </div>
    <Image
        src="/images/profilemenu/forward.svg"
        alt="Friend"
        width={20}
        height={20}
        className="icon-filter group-cursor-pointer"
      />
    </div>
  );
}
