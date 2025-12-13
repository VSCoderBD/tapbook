"use client";

import BrandName from "./navButtons/BrandName";
import HomeButton from "./navButtons/HomeButton";
import FriendButton from "./navButtons/FriendButton";
import ChatMenu from "./navButtons/ChatMenu";
import VideoButton from "./navButtons/VideoButton";
import GroupButton from "./navButtons/GroupButton";
import NotificationButton from "./navButtons/NotificationButton";
import SearchButtons from "./navButtons/SearchButton";
import ProfileMenu from "./navButtons/ProfileMenu";
import MenuMenu from "./navButtons/MenuMenu";
import SettingsMenu from "../profileMenu/Settings";
import Display from "../profileMenu/Display";
import LogOut from "../profileMenu/LogOut";

export default function MobileNavbar({ profile }: any) {
  const { open, setOpen, menuRef, buttonRef } = profile;

  return (
    <nav className="border-b border-border bg-nav text-pg">

      {/* TOP */}
      <div className="flex justify-between items-center px-3 py-2">
        <div className="text-brand text-3xl"><BrandName /></div>
        <div className="flex items-center gap-2">
          <SearchButtons />
          <button
            ref={buttonRef}
            onClick={() => setOpen(!open)}
          >
            <ProfileMenu isOpen={open} />
          </button>
        </div>
      </div>

      {/* PROFILE MENU */}
      {open && (
        <div
          ref={menuRef}
          className="fixed flex flex-col gap-3 inset-x-2 top-14 bg-nav rounded-xl shadow-lg shadow-brand p-4 z-50"
        >
          <MenuMenu />
          <SettingsMenu />
          <Display />
          <LogOut />
        </div>
      )}

      {/* BOTTOM NAV */}
      <div className="flex justify-between px-2 py-3">
        <HomeButton />
        <FriendButton />
        <ChatMenu />
        <VideoButton />
        <GroupButton />
        <NotificationButton />
      </div>
    </nav>
  );
}
