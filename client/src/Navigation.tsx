import { Link } from "react-router";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { ThemeButton } from "./ThemeButton";
import { useAuthStore } from "./useAuthStore";
import { Heart, User, Info, PawPrint, Sparkles, Settings } from "lucide-react";

export function Navigation() {
  const email = useAuthStore((state) => state.email);
  const logout = useAuthStore((state) => state.logout);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <nav className="border-b z-50 shadow-2xl rounded-full sticky top-5 mx-auto max-w-6xl w-11/12">
      <Card className="lg:p-0 lg:rounded-full rounded-full lg:shadow-2xl shadow-xl overflow-hidden border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg">
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
              {isAuthenticated && (
                <Link
                  to="/pets"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 cursor-pointer group font-medium"
                >
                  <Heart className="h-4 w-4 group-hover:text-red-500 group-hover:animate-pulse transition-all duration-300" />
                  <span className="group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    My Pets
                  </span>
                </Link>
              )}
              
              <Link
                to="/about"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 cursor-pointer group font-medium"
              >
                <Info className="h-4 w-4 group-hover:text-blue-500 transition-all duration-300" />
                <span className="group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  About
                </span>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  {/* User Profile Direct Link */}
                  <Link 
                    to="/profile"
                    className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-full border border-green-200 dark:border-green-800 hover:from-green-100 hover:to-emerald-100 dark:hover:from-green-900/30 dark:hover:to-emerald-900/30 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                  >
                    <div className="relative">
                      <User className="h-4 w-4 text-green-600 group-hover:animate-pulse" />
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <span className="text-sm font-medium text-green-700 dark:text-green-300 group-hover:text-green-800 dark:group-hover:text-green-200 transition-colors duration-300">
                      {email.split('@')[0]}
                    </span>
                    <Settings className="h-3 w-3 text-green-600 group-hover:rotate-45 transition-transform duration-300" />
                  </Link>
                  
                  <Button 
                    onClick={() => logout()} 
                    variant="outline"
                    className="hover:bg-red-50 hover:border-red-200 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:border-red-800 transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button 
                      variant="outline"
                      className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 dark:hover:border-blue-800 transition-all duration-300 font-medium"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      Register
                    </Button>
                  </Link>
                </>
              )}
              <ThemeButton />
            </div>
          </div>
        </div>
      </Card>
    </nav>
  );
}