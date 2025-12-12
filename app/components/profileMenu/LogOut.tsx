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
    <button onClick={handleLogout} className="flex cursor-pointer justify-between w-full">
      <div className="flex group items-center gap-2">
        <div className="bg-card p-1.5 rounded-full">
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
