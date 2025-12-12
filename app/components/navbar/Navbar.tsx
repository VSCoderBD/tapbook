"use client"
import { useState, useEffect } from "react";
import BrandLogo from "./navButtons/BrandLogo";
import BrandName from "./navButtons/BrandName";
import HomeButton from "./navButtons/HomeButton";
import FriendButton from "./navButtons/FriendButton";
import VideoButton from "./navButtons/VideoButton";
import NotificationButton from "./menuButton/NotificationButton";
import ProfileMenu from "./menuButton/ProfileMenu";
import SearchButtons from "./menuButton/SearchButton";
import ChatMenu from "./menuButton/ChatMenu";
import GroupButton from "./navButtons/GroupButton";
import MenuMenu from "./menuButton/MenuMenu";
import LogOut from "../profileMenu/LogOut";
import Mode from "../profileMenu/Mode";

export default function Navbar() {

  const [mounted, setMounted] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

    return (
        <nav className="flex flex-col justify-center items-center border-b border-border bg-nav text-pg">
          <div className="grid grid-cols-2 sm:grid-cols-[30%_40%_30%] px-2 justify-center w-full">
          <div className="flex items-center gap-2">
          <div className="hidden sm:flex"><BrandLogo /></div>
          <div className="flex sm:hidden text-brand text-3xl"><BrandName /></div>
          <div className="sm:flex hidden"><SearchButtons /></div>
          </div>

          <div className="hidden sm:flex justify-between mx-2 w-full items-center">
            <div className="flex justify-center items-center hover:bg-card w-full h-[92%] rounded"><HomeButton /></div>
            <div className="flex justify-center items-center hover:bg-card w-full h-[92%] rounded"><FriendButton /></div>
            <div className="flex justify-center items-center hover:bg-card w-full h-[92%] rounded"><VideoButton /></div>
            <div className="flex justify-center items-center hover:bg-card w-full h-[92%] rounded"><GroupButton /></div>
          </div>

          <div className="flex justify-end items-center gap-1.5">
            <div className="flex sm:hidden"><SearchButtons /></div>
            <div className="hidden sm:flex justify-center my-1.5 w-10 bg-card hover:bg-cardHover p-1 rounded-full"><MenuMenu /></div>
            <div className="hidden sm:flex justify-center my-1.5 w-10 bg-card hover:bg-cardHover p-1 rounded-full"><NotificationButton /></div>
            <div className="hidden sm:flex justify-center my-1.5 w-10 bg-card hover:bg-cardHover p-1 rounded-full"><ChatMenu /></div>

            <button onClick={() => setProfileOpen(!profileOpen)}
            className="reletade flex justify-center my-1.5"><ProfileMenu />
            </button>
{profileOpen && (
  <div
    className="
      absolute top-14 z-50
      left-1/2 -translate-x-1/2
      flex flex-col gap-4
      bg-nav rounded-xl shadow-lg shadow-slate-600
      w-[95%] p-4
      sm:w-[350px] sm:left-auto sm:right-2 sm:translate-x-0
    "
  >
    <Mode />
    <LogOut />
  </div>
)}

          </div>
          </div>

       <div className="flex sm:hidden justify-between mx-2 w-full items-center">
            <div className="flex justify-center items-center py-2 hover:bg-card w-full h-[92%] rounded"><HomeButton /></div>
            <div className="flex justify-center items-center py-2 hover:bg-card w-full h-[92%] rounded"><FriendButton /></div>
            <div className="flex justify-center items-center py-2 hover:bg-card w-full h-[92%] rounded"><ChatMenu /></div>
            <div className="flex justify-center items-center py-2 hover:bg-card w-full h-[92%] rounded"><VideoButton /></div>
            <div className="flex justify-center items-center py-2 hover:bg-card w-full h-[92%] rounded"><GroupButton /></div>
            <div className="flex justify-center items-center py-2 hover:bg-card w-full h-[92%] rounded"><NotificationButton /></div>
      </div>
        </nav>
    )
}