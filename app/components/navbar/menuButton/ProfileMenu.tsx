"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

type ProfileMenuProps = {
  isOpen: boolean;
};

export default function ProfileMenu({ isOpen }: ProfileMenuProps) {
  const pathname = usePathname();
  const active = pathname === "/profile";

  // 🔑 rule:
  // profile page OR menu open → no filter
  const showActive = active || isOpen;

  return (
    <Image
      src="/images/nav/profile.svg"
      alt="Profile"
      width={40}
      height={40}
      className={!showActive ? "icon-filter" : ""}
    />
  );
}
