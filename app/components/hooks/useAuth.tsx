"use client";

export function isLoggedIn(): boolean {
  return typeof window !== "undefined" && !!localStorage.getItem("auth");
}

export function useAuthHelpers() {
  const doLogin = (email: string, pass: string, redirect: string) => {
    localStorage.setItem("auth", "true");
    window.location.replace(redirect);
  };

  const doLogout = () => {
    localStorage.removeItem("auth");
    window.location.replace("/");
  };

  return { doLogin, doLogout };
}
