"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// GLOBAL CACHE (refresh না হওয়া পর্যন্ত data save থাকবে)
let globalCache: any = null;

export default function LoadingWrapper({
  children,
  loadPromise,
}: {
  children: React.ReactNode;
  loadPromise: Promise<any>;
}) {
  const [loaded, setLoaded] = useState(globalCache !== null);

  useEffect(() => {
    // Already loaded → সরাসরি children দেখাও
    if (globalCache !== null) {
      setLoaded(true);
      return;
    }

    // প্রথমবার load হলে → promise run করো
    loadPromise.then((data) => {
      globalCache = data;
      setLoaded(true);
    });
  }, [loadPromise]);

  if (!loaded) {
    return (
      <div className="w-full h-screen">
        <div className="flex w-full h-[80%] flex-col gap-4 items-center justify-center bg-background">
          <Image
            src="/images/brand/logo.png"
            alt="Loading"
            width={70}
            height={70}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col top-0 h-[20%] items-center justify-center">
          <p>from</p>
          <h1 className="text-2xl font-extrabold">tapbook</h1>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
