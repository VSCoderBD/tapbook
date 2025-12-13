"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LogOut() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("auth");                    // <--- THIS refreshes "/" root layout
    router.replace("/");  
    router.refresh();  
  };

  return (
    <button onClick={handleLogout} className="flex group cursor-pointer justify-between w-full">
      <div className="flex items-center gap-2">
        <div className="bg-card sm:group-hover:bg-cardHover p-1.5 rounded-full">
          <Image
            src="/images/profilemenu/logout.svg"
            alt="Logout"
            width={20}
            height={20}
            className="icon-filter"
          />
        </div>
        <p className="text-sm">Log Out</p>
      </div>
    </button>
  );
}
