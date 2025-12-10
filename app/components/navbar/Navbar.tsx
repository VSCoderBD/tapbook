"use client"
import React from "react";
import {useDarkMode} from "../hooks/UseDarkMode";
import BrandLogo from "./navButtons/BrandLogo";
import BrandName from "./navButtons/BrandName";
import HomeButton from "./navButtons/HomeButton";
import FriendButton from "./navButtons/FriendButton";
import VideoButton from "./navButtons/VideoButton";
import NotificationButton from "./navButtons/NotificationButton";
import ProfileMenu from "./navButtons/ProfileMenu";

export default function Navbar() {

    return (
        <nav className="border-b px-2 border-border bg-nav text-pg">
          <div className="grid grid-cols-2 sm:grid-cols-[25%_50%_25%] justify-center">
          <div className="flex items-center">
           <div className="hidden sm:flex"><BrandLogo /></div>
            <div className="flex sm:hidden text-brand text-3xl"><BrandName /></div>
          </div>

          <div className="hidden sm:flex justify-between mx-2 w-full items-center">
            <div className="flex justify-center items-center hover:bg-card w-full h-full p-2 rounded"><HomeButton /></div>
            <div className="flex justify-center items-center hover:bg-card w-full h-full p-2 rounded"><FriendButton /></div>
            <div className="flex justify-center items-center hover:bg-card w-full h-full p-2 rounded"><VideoButton /></div>
          </div>

          <div className="flex justify-end items-center gap-1">
            <div className="hidden sm:flex justify-center my-1.5 w-10 bg-card hover:bg-cardHover p-1 rounded-full"><NotificationButton /></div>
            <div className="flex justify-center my-1.5"><ProfileMenu /></div>
          </div>
          </div>

      <div className="sm:hidden flex justify-between mx-2 w-full items-center">
            <div className="flex justify-center hover:bg-card w-full h-full p-2 rounded"><HomeButton /></div>
            <div className="flex justify-center hover:bg-card w-full h-full p-2 rounded"><FriendButton /></div>
            <div className="flex justify-center hover:bg-card w-full h-full p-2 rounded"><VideoButton /></div>
            <div className="flex justify-center hover:bg-card w-full h-full p-2 rounded"><NotificationButton /></div>
      </div>
        </nav>
    )
}