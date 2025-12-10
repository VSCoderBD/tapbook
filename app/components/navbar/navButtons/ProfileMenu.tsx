"use client";
import Image from "next/image";

export default function ProfileMenu({ className = "" }) {
  return (
    <button className={`icon-filter ${className}`}>
      <Image 
        src="/images/nav/profile.svg"
        alt="Profile"
        width={40}
        height={40}
      />
    </button>
  );
}
