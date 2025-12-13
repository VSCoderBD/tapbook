"use client";

import { googleLogin } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function GoogleLoginButton() {
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      const user = await googleLogin();

      // Save login to localStorage
      localStorage.setItem("auth", JSON.stringify({
        email: user.email,
        name: user.displayName,
        photo: user.photoURL
      }));

      router.replace("/"); // redirect home
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="flex justify-center my-2 items-center gap-2 bg-white shadow-lg shadow-brand border px-4 py-2 rounded-lg hover:bg-gray-200 w-full"
    >
      <img src="/images/user/google.svg" alt="google" className="w-6 h-6" />
      <span>Continue with Google</span>
    </button>
  );
}
