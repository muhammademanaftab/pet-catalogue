import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { useTheme } from "./ThemeProvider";

export function ThemeButton() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  
  return (
    <button
      onClick={handleClick}
      className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
      
      {/* Border */}
      <div className="absolute inset-0 border-2 border-pink-300/50 dark:border-purple-400/50 rounded-full group-hover:border-pink-400/70 dark:group-hover:border-purple-300/70 transition-colors duration-300"></div>
      
      {/* Icon */}
      <div className="relative z-10 text-pink-600 dark:text-purple-400 group-hover:text-pink-700 dark:group-hover:text-purple-300 transition-colors duration-300">
        {theme === "light" ? (
          <Sun className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
        ) : (
          <Moon className="h-5 w-5 group-hover:-rotate-12 transition-transform duration-300" />
        )}
      </div>
      
      {/* Sparkle effect */}
      <div className="absolute top-0 right-0 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-70"></div>
    </button>
  );
}