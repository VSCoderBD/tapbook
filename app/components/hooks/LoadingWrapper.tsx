"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingWrapper({
  children,
  loadPromise,
}: {
  children: React.ReactNode;
  loadPromise: Promise<any>;
}) {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [timerDone, setTimerDone] = useState(false);

  useEffect(() => {
    loadPromise.finally(() => setDataLoaded(true));
  }, [loadPromise]);

  useEffect(() => {
    const t = setTimeout(() => setTimerDone(true), 2000);
    return () => clearTimeout(t);
  }, []);

  if (!dataLoaded || !timerDone) {
    return (
      <div className="w-full h-screen">
      <div className=" flex w-full h-[80%] flex-col gap-4 items-center justify-center bg-background">
        <Image
          src="/images/brand/logo.png"
          alt="Loading"
          width={70}
          height={40}
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
