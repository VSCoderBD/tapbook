"use client";
import { useEffect, useState } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { useProfileMenu } from "../../hooks/useProfileMenu";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const profile = useProfileMenu();

  useEffect(() => {
    const media = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(media.matches);
    update();

    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  if (isMobile) {
    return <MobileNavbar profile={profile} />;
  }

  return <DesktopNavbar profile={profile} />;
}
