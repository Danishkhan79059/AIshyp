"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  THEME_DARK,
  THEME_LIGHT,
  THEME_STORAGE_KEY,
} from "./theme";

const ThemeContext = createContext(null);

function getResolvedTheme() {
  if (typeof window === "undefined") return THEME_LIGHT;

  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === THEME_DARK || storedTheme === THEME_LIGHT) {
      return storedTheme;
    }
  } catch (error) {}

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? THEME_DARK
    : THEME_LIGHT;
}

function applyThemeToDocument(theme) {
  const root = document.documentElement;
  root.classList.remove(THEME_DARK, THEME_LIGHT);
  root.classList.add(theme);
  root.style.colorScheme = theme;
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(THEME_LIGHT);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initialTheme = getResolvedTheme();
    setTheme(initialTheme);
    applyThemeToDocument(initialTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    applyThemeToDocument(theme);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {}
  }, [theme, mounted]);

  const value = useMemo(
    () => ({
      theme,
      isDark: theme === THEME_DARK,
      isMounted: mounted,
      setTheme,
      toggleTheme: () => {
        setTheme((currentTheme) =>
          currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK,
        );
      },
    }),
    [theme, mounted],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
