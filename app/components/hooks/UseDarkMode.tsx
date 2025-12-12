"use client";
import { useEffect, useState } from "react";

export function useDarkMode() {
  const [theme, setTheme] = useState("system"); // light | dark | system

  // Apply light/dark immediately
  const applyTheme = (mode: string) => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else if (mode === "light") {
      document.documentElement.classList.remove("dark");
    }
  };

  // Apply system preference
  const applySystemTheme = () => {
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (systemDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Load theme on page load
  useEffect(() => {
    const stored = localStorage.getItem("theme");

    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      applyTheme(stored);
    } else {
      setTheme("system");
      applySystemTheme();
    }
  }, []);

  // Set Light Mode
  const setLightMode = () => {
    setTheme("light");
    localStorage.setItem("theme", "light");
    applyTheme("light");
  };

  // Set Dark Mode
  const setDarkMode = () => {
    setTheme("dark");
    localStorage.setItem("theme", "dark");
    applyTheme("dark");
  };

  // Set System Mode
  const setSystemMode = () => {
    setTheme("system");
    localStorage.setItem("theme", "system");
    applySystemTheme();
  };

  return {
    theme,
    isDark: theme === "dark",
    setLightMode,
    setDarkMode,
    setSystemMode,
  };
}
