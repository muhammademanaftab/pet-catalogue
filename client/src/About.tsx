import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Mail, User, GraduationCap, Heart, Code, Sparkles, PawPrint } from "lucide-react";

export default function About() {
  const technologies = [
    { name: "React", color: "from-blue-400 to-cyan-400", icon: "⚛️" },
    { name: "TypeScript", color: "from-blue-600 to-blue-800", icon: "📘" },
    { name: "Tailwind CSS", color: "from-cyan-400 to-teal-400", icon: "🎨" },
    { name: "React Query", color: "from-red-400 to-pink-400", icon: "🔄" },
    { name: "React Router", color: "from-orange-400 to-red-400", icon: "🛣️" },
    { name: "PHP/Laravel", color: "from-purple-400 to-violet-400", icon: "🐻" },
    { name: "shadcn/ui", color: "from-gray-600 to-gray-800", icon: "🎭" },
    { name: "Vite", color: "from-yellow-400 to-orange-400", icon: "⚡" }
  ];

  return (
    <div className="container max-w-4xl mx-auto px-4 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4 relative">
        {/* Floating decorative elements */}
        <div className="absolute top-0 left-1/4 w-4 h-4 bg-pink-400/60 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-8 right-1/4 w-3 h-3 bg-purple-400/50 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent flex items-center justify-center gap-3">
            <PawPrint className="h-10 w-10 text-pink-500 animate-pulse" />
            About Pet Catalogue
            <Sparkles className="h-8 w-8 text-yellow-500 animate-bounce" />
          </span>
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          A heartfelt web application to preserve precious memories of our beloved pets
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        
        {/* Project Purpose */}
        <Card className="bg-gradient-to-br from-pink-50/80 to-rose-50/80 dark:from-pink-900/30 dark:to-rose-900/30 border-pink-200/50 dark:border-pink-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-gray-800 dark:text-gray-200">
              <Heart className="h-6 w-6 text-pink-500 animate-pulse" />
              Why Pet Catalogue?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Pet Catalogue helps pet owners create lasting digital memories of their beloved companions. 
              Whether celebrating a living pet or honoring one who has passed, this application provides 
              a beautiful space to store photos, important dates, and cherished memories that will never be forgotten.
            </p>
          </CardContent>
        </Card>

        {/* Developer Info */}
        <Card className="bg-gradient-to-br from-blue-50/80 to-cyan-50/80 dark:from-blue-900/30 dark:to-cyan-900/30 border-blue-200/50 dark:border-blue-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-gray-800 dark:text-gray-200">
              <User className="h-6 w-6 text-blue-500" />
              Developer Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg backdrop-blur-sm">
                <User className="h-5 w-5 text-blue-500" />
                <div>
                  <span className="font-medium text-gray-600 dark:text-gray-400">Name:</span>
                  <span className="font-bold ml-2 text-gray-800 dark:text-gray-200">Muhammad Eman Aftab</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg backdrop-blur-sm">
                <GraduationCap className="h-5 w-5 text-green-500" />
                <div>
                  <span className="font-medium text-gray-600 dark:text-gray-400">Neptun ID:</span>
                  <Badge variant="outline" className="ml-2 font-bold border-green-300 text-green-600 dark:border-green-600 dark:text-green-400">IJE4R1</Badge>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg backdrop-blur-sm">
              <Mail className="h-5 w-5 text-purple-500" />
              <div>
                <span className="font-medium text-gray-600 dark:text-gray-400">Contact:</span>
                <a href="mailto:ije4r1@inf.elte.hu" className="font-bold text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 ml-2 transition-colors duration-300">
                  ije4r1@inf.elte.hu
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technologies */}
        <Card className="bg-gradient-to-br from-purple-50/80 to-violet-50/80 dark:from-purple-900/30 dark:to-violet-900/30 border-purple-200/50 dark:border-purple-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-gray-800 dark:text-gray-200">
              <Code className="h-6 w-6 text-purple-500" />
              Built With
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {technologies.map((tech, index) => (
                <Badge 
                  key={tech.name}
                  variant="secondary" 
                  className={`justify-center py-2 text-sm font-semibold bg-gradient-to-r ${tech.color} text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="mr-2">{tech.icon}</span>
                  {tech.name}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Closing Message */}
        <Card className="bg-gradient-to-r from-yellow-50/80 via-orange-50/80 to-red-50/80 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 border-yellow-200/50 dark:border-yellow-700/50 backdrop-blur-sm">
          <CardContent className="text-center py-8">
            <div className="space-y-4">
              <div className="flex justify-center gap-2 text-2xl">
                <span className="animate-bounce" style={{animationDelay: '0s'}}>🐾</span>
                <span className="animate-bounce" style={{animationDelay: '0.5s'}}>💖</span>
                <span className="animate-bounce" style={{animationDelay: '1s'}}>🌟</span>
              </div>
              <blockquote className="text-lg italic font-medium text-gray-700 dark:text-gray-300 leading-relaxed">
                "Every pet leaves paw prints on our hearts.<br />
                This application helps preserve those precious memories forever."
              </blockquote>
              <div className="flex items-center justify-center gap-2">
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Made with love for pet parents everywhere</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}