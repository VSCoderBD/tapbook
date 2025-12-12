"use client";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { useDarkMode } from "./components/hooks/UseDarkMode";
import LoadingWrapper from "./components/hooks/LoadingWrapper";

async function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("DONE"), 1200);
  });
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useDarkMode();

  return (
    <html lang="en">
      <body>
        <LoadingWrapper loadPromise={getData()}>
        <Navbar />
          {children}
        </LoadingWrapper>
      </body>
    </html>
  );
}
