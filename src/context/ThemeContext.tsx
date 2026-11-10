import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Palette = "blue" | "green";
export type Mode = "dark" | "light";

type ThemeContextValue = {
  palette: Palette;
  mode: Mode;
  setPalette: (palette: Palette) => void;
  setMode: (mode: Mode) => void;
  toggleMode: () => void;
  togglePalette: () => void;
};

const STORAGE_KEY = "portfolio-theme";

const ThemeContext = createContext<ThemeContextValue | null>(null);

const getStoredTheme = (): { palette: Palette; mode: Mode } => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { palette: "blue", mode: "dark" };
    const parsed = JSON.parse(raw) as { palette?: Palette; mode?: Mode };
    return {
      palette: parsed.palette === "green" ? "green" : "blue",
      mode: parsed.mode === "light" ? "light" : "dark",
    };
  } catch {
    return { palette: "blue", mode: "dark" };
  }
};

const applyThemeAttrs = (palette: Palette, mode: Mode) => {
  const root = document.documentElement;
  root.setAttribute("data-palette", palette);
  root.setAttribute("data-mode", mode);
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ palette, mode }));
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [{ palette, mode }, setTheme] = useState(() => {
    const initial = getStoredTheme();
    applyThemeAttrs(initial.palette, initial.mode);
    return initial;
  });

  useEffect(() => {
    applyThemeAttrs(palette, mode);
  }, [palette, mode]);

  const setPalette = useCallback((next: Palette) => {
    setTheme((prev) => ({ ...prev, palette: next }));
  }, []);

  const setMode = useCallback((next: Mode) => {
    setTheme((prev) => ({ ...prev, mode: next }));
  }, []);

  const toggleMode = useCallback(() => {
    setTheme((prev) => ({
      ...prev,
      mode: prev.mode === "dark" ? "light" : "dark",
    }));
  }, []);

  const togglePalette = useCallback(() => {
    setTheme((prev) => ({
      ...prev,
      palette: prev.palette === "blue" ? "green" : "blue",
    }));
  }, []);

  const value = useMemo(
    () => ({
      palette,
      mode,
      setPalette,
      setMode,
      toggleMode,
      togglePalette,
    }),
    [palette, mode, setPalette, setMode, toggleMode, togglePalette]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
