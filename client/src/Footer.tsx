import { Heart, Mail, Phone, MapPin, Github, Twitter, Instagram, PawPrint, Star, Sparkles } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t z-10">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-blue-900/10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-pulse"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-4 left-8 w-3 h-3 bg-pink-300 rounded-full opacity-50 animate-bounce" style={{animationDelay: '0s'}}></div>
      <div className="absolute top-8 right-16 w-2 h-2 bg-purple-300 rounded-full opacity-60 animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-8 left-1/4 w-4 h-4 bg-blue-300 rounded-full opacity-40 animate-bounce" style={{animationDelay: '2s'}}></div>
      
      <div className="relative container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <PawPrint className="h-8 w-8 text-pink-500 animate-pulse" />
                <Sparkles className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1 animate-bounce" />
              </div>
              <h3 className="text-2xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Pet Catalogue
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Creating lasting memories and honoring the pets who have touched our hearts. 
              Every pet deserves to be remembered forever.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>Made with love for pet parents worldwide</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-muted-foreground hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-300 hover:translate-x-1 transform inline-block group"
                >
                  <span className="group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    🏠 Home
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/pets" 
                  className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:translate-x-1 transform inline-block group"
                >
                  <span className="group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    🐾 My Pets
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/pets/new" 
                  className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-1 transform inline-block group"
                >
                  <span className="group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    ➕ Add Pet
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 hover:translate-x-1 transform inline-block group"
                >
                  <span className="group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    ℹ️ About
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500 animate-pulse" />
              Connect With Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground group">
                <Mail className="h-4 w-4 text-blue-500 group-hover:animate-bounce" />
                <a 
                  href="mailto:love@petcatalogue.com" 
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  love@petcatalogue.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground group">
                <Phone className="h-4 w-4 text-green-500 group-hover:animate-bounce" />
                <span className="hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300">
                  +1 (555) PET-LOVE
                </span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground group">
                <MapPin className="h-4 w-4 text-red-500 group-hover:animate-bounce" />
                <span className="hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300">
                  Pet Paradise, Love Street 🏡
                </span>
              </li>
            </ul>
          </div>

          {/* Pet Features */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-purple-500 animate-pulse" />
              Pet Features
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="text-lg">📝</div>
                <span className="text-sm">Detailed pet profiles</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="text-lg">📅</div>
                <span className="text-sm">Birth & memorial dates</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="text-lg">💝</div>
                <span className="text-sm">Memory preservation</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="text-lg">📊</div>
                <span className="text-sm">Beautiful statistics</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground font-medium">Follow our pet adventures:</span>
              <div className="flex items-center gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                  title="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                  title="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                  title="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>© {currentYear} Pet Catalogue.</span>
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                <span>All rights reserved.</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Crafted with 💖 for pet lovers everywhere
              </p>
            </div>
          </div>
        </div>

        {/* Fun Pet Quote */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 px-6 py-3 rounded-full border border-yellow-200 dark:border-yellow-800">
            <div className="text-2xl animate-bounce">🐾</div>
            <span className="text-sm italic text-muted-foreground">
              "A pet is never truly forgotten until it is no longer remembered."
            </span>
            <div className="text-2xl animate-bounce" style={{animationDelay: '0.5s'}}>💖</div>
          </div>
        </div>
      </div>
    </footer>
  );
}