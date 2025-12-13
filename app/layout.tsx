"use client";

import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { useDarkMode } from "./hooks/UseDarkMode";
import LoadingWrapper from "./hooks/LoadingWrapper";
import LoginPage from "./userpage/login";
import { isLoggedIn } from "./hooks/useAuth";

async function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("DONE"), 1200);
  });
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useDarkMode();

  const logged = isLoggedIn(); // <-- check login here

  return (
    <html lang="en">
      <body>
        <LoadingWrapper loadPromise={getData()}>
           {!logged ? (
          <LoginPage />
        ) : (
          <>
            <Navbar />
            {children}
          </>
        )}
        </LoadingWrapper>
      </body>
    </html>
  );
}
