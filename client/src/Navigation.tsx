import { Link } from "react-router";
import { Card } from "./components/ui/card";
import { ThemeButton } from "./ThemeButton";
import { Heart, Info, PawPrint, Sparkles } from "lucide-react";

export function Navigation() {
  return (
    <nav className="border-b border-pink-200/50 dark:border-purple-700/50 z-50 shadow-2xl rounded-full sticky top-5 mx-auto max-w-6xl w-11/12">
      <Card className="lg:p-0 lg:rounded-full rounded-full lg:shadow-2xl shadow-xl overflow-hidden border-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl">
        {/* Animated top border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex lg:flex-row flex-col gap-3 justify-between items-center lg:h-16">
            <div className="flex items-center space-x-8">
              {/* Beautiful Logo */}
              <Link 
                to="/" 
                className="flex items-center gap-2 text-xl font-black hover:scale-105 transition-all duration-300 group"
              >
                <div className="relative">
                  <PawPrint className="h-6 w-6 text-pink-500 group-hover:text-purple-500 transition-colors duration-300" />
                  <Sparkles className="h-3 w-3 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
                </div>
                <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Pet Catalogue
                </span>
              </Link>

              {/* Navigation Links */}
              <Link
                to="/pets"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-300 cursor-pointer group font-medium"
              >
                <Heart className="h-4 w-4 group-hover:text-red-500 group-hover:animate-pulse transition-all duration-300" />
                <span className="group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  My Pets
                </span>
              </Link>
              
              <Link
                to="/about"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-pointer group font-medium"
              >
                <Info className="h-4 w-4 group-hover:text-blue-500 transition-all duration-300" />
                <span className="group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  About
                </span>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <ThemeButton />
            </div>
          </div>
        </div>
      </Card>
    </nav>
  );
}