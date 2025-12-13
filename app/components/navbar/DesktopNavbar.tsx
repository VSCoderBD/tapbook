"use client";

import BrandLogo from "./navButtons/BrandLogo";
import SearchButtons from "./menuButton/SearchButton";
import HomeButton from "./navButtons/HomeButton";
import FriendButton from "./navButtons/FriendButton";
import VideoButton from "./navButtons/VideoButton";
import GroupButton from "./navButtons/GroupButton";
import MenuMenu from "./menuButton/MenuMenu";
import NotificationButton from "./menuButton/NotificationButton";
import ChatMenu from "./menuButton/ChatMenu";
import ProfileMenu from "./menuButton/ProfileMenu";
import SettingsMenu from "../profileMenu/Settings";
import Display from "../profileMenu/Display";
import LogOut from "../profileMenu/LogOut";

export default function DesktopNavbar({ profile }: any) {
  const { open, setOpen, menuRef, buttonRef } = profile;

  return (
    <nav className="relative flex flex-col px-4 py-[3px] justify-center items-center border-b border-border bg-nav text-pg">
      <div className="grid grid-cols-2 sm:grid-cols-[30%_40%_30%] justify-center w-full">
        {/* LEFT */}
        <div className="flex items-center gap-2">
          <div className="flex">
            <BrandLogo />
          </div>
          <div className="sm:flex hidden">
            <SearchButtons />
          </div>
        </div>

        {/* CENTER */}
        <div className="hidden sm:flex justify-between mx-2 w-full items-center">
          <div className="flex justify-center items-center hover:bg-card w-full h-[105%] rounded">
            <HomeButton />
          </div>
          <div className="flex justify-center items-center hover:bg-card w-full h-[105%] rounded">
            <FriendButton />
          </div>
          <div className="flex justify-center items-center hover:bg-card w-full h-[105%] rounded">
            <VideoButton />
          </div>
          <div className="flex justify-center items-center hover:bg-card w-full h-[105%] rounded">
            <GroupButton />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-end items-center gap-1.5">

          <div className="flex justify-center my-1.5 w-10 rounded-full">
            <MenuMenu />
          </div>

          <div className="flex justify-center my-1.5 w-10 bg-card hover:bg-cardHover p-1 rounded-full">
            <NotificationButton />
          </div>

          <div className="flex justify-center my-1.5 w-10 bg-card hover:bg-cardHover p-1 rounded-full">
            <ChatMenu />
          </div>

          <button
            ref={buttonRef}
            onClick={() => setOpen(!open)}
          >
            <ProfileMenu isOpen={open} />
          </button>

          {/* PROFILE MENU */}
          {open && (
            <div
              ref={menuRef}
              className="
                absolute top-14 z-50
                left-1/2 -translate-x-1/2
                flex flex-col gap-4
                bg-nav rounded-xl shadow-lg shadow-brand
                w-[95%] p-4
                sm:w-[350px] sm:left-auto sm:right-2 sm:translate-x-0
              "
            >
              <SettingsMenu />
              <Display />
              <LogOut />
            </div>
          )}
        </div>
      </div>

    </nav>
  );
}
