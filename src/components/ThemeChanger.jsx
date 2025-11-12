import { useEffect, useState } from "react";

function ThemeChanger() {
  // Default theme is "light"
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // Apply theme to <html> (DaisyUI uses data-theme)
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Handle toggle switch
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        className="toggle theme-controller"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <span className="text-sm font-medium text-base-content">
        {theme === "light" ? "Light" : "Dark"}
      </span>
    </label>
  );
}

export default ThemeChanger;
