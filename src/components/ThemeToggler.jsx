import { useEffect, useState } from "react";

function ThemeToggler() {
  const [theme, setTheme] = useState("system");

  // Detect system theme
  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  // Apply theme to <html> tag
  const applyTheme = (selectedTheme) => {
    const root = document.documentElement;

    if (selectedTheme === "system") {
      const system = getSystemTheme();
      root.setAttribute("data-theme", system);
    } else {
      root.setAttribute("data-theme", selectedTheme);
    }
  };

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);
    applyTheme(savedTheme);

    // Listen to system changes (if system theme is active)
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") applyTheme("system");
    };
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  // Handle toggle
  const toggleTheme = () => {
    const nextTheme =
      theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
  };

  // Determine icon + label
  const getIcon = () => {
    switch (theme) {
      case "light":
        return "☀️";
      case "dark":
        return "🌙";
      default:
        return "💻";
    }
  };

  const getLabel = () => {
    switch (theme) {
      case "light":
        return "Light";
      case "dark":
        return "Dark";
      default:
        return "System";
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost btn-soft flex items-center gap-2 text-base"
    >
      <span>{getIcon()}</span>
      <span className="hidden sm:inline">{getLabel()}</span>
    </button>
  );
}

export default ThemeToggler;
