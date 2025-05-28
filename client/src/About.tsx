import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Mail, User, GraduationCap, Heart, Code, Sparkles, Star, Award, Coffee, Music, Camera, Gamepad2, BookOpen, PawPrint } from "lucide-react";

export default function About() {
  const technologies = [
    { name: "React", color: "from-blue-400 to-cyan-400", icon: "⚛️" },
    { name: "TypeScript", color: "from-blue-600 to-blue-800", icon: "📘" },
    { name: "Tailwind CSS", color: "from-cyan-400 to-teal-400", icon: "🎨" },
    { name: "React Query", color: "from-red-400 to-pink-400", icon: "🔄" },
    { name: "React Router", color: "from-orange-400 to-red-400", icon: "🛣️" },
    { name: "Zustand", color: "from-purple-400 to-violet-400", icon: "🐻" },
    { name: "shadcn/ui", color: "from-gray-600 to-gray-800", icon: "🎭" },
    { name: "Vite", color: "from-yellow-400 to-orange-400", icon: "⚡" }
  ];

  const features = [
    { name: "Pet information management", icon: "📝", color: "text-blue-500" },
    { name: "Birth and death date tracking", icon: "📅", color: "text-green-500" },
    { name: "Personal notes and memories", icon: "💝", color: "text-pink-500" },
    { name: "Responsive design", icon: "📱", color: "text-purple-500" },
    { name: "Dark/light theme support", icon: "🌓", color: "text-yellow-500" },
    { name: "Real-time database integration", icon: "🔗", color: "text-red-500" }
  ];

  const hobbies = [
    { name: "Photography", icon: Camera, color: "text-purple-500" },
    { name: "Gaming", icon: Gamepad2, color: "text-blue-500" },
    { name: "Reading", icon: BookOpen, color: "text-green-500" },
    { name: "Music", icon: Music, color: "text-pink-500" },
    { name: "Coffee", icon: Coffee, color: "text-orange-500" }
  ];

  return (
    <div className="container max-w-5xl mx-auto px-4 space-y-12">
      {/* Beautiful Header */}
      <div className="text-center space-y-6 relative">
        {/* Floating decorative elements */}
        <div className="absolute top-0 left-1/4 w-4 h-4 bg-pink-400/60 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-8 right-1/4 w-3 h-3 bg-purple-400/50 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-16 left-1/3 w-2 h-2 bg-blue-400/70 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100/80 to-blue-100/80 dark:from-pink-900/30 dark:to-blue-900/30 px-4 py-2 rounded-full border border-pink-200/50 dark:border-pink-700/50 mb-4 backdrop-blur-sm">
          <Star className="h-4 w-4 text-yellow-500 animate-pulse" />
          <span className="text-sm font-medium bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
            Meet the Creator
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-black tracking-tight">
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-pulse flex items-center justify-center gap-4">
            <Heart className="h-12 w-12 text-red-500 animate-pulse" />
            About the Author
            <Sparkles className="h-10 w-10 text-yellow-500 animate-bounce" />
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Learn more about the passionate developer behind Pet Catalogue
        </p>
      </div>

      {/* Main Profile Card */}
      <Card className="max-w-4xl mx-auto overflow-hidden border-0 shadow-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-pulse"></div>
        
        <CardHeader className="text-center pb-6">
          {/* Animated Profile Picture */}
          <div className="flex justify-center mb-6">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-4xl font-black text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-all duration-300">
                  JD
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-bounce">
                <Award className="h-4 w-4 text-white" />
              </div>
              <Sparkles className="absolute -bottom-2 -left-2 h-6 w-6 text-purple-500 animate-pulse" />
            </div>
          </div>
          
          <CardTitle className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Developer Information
          </CardTitle>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Passionate full-stack developer with a love for creating meaningful applications
          </p>
        </CardHeader>

        <CardContent className="space-y-10 px-8 pb-8">
          {/* Personal Details & Project Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Personal Details */}
            <Card className="bg-gradient-to-br from-blue-50/80 to-cyan-50/80 dark:from-blue-900/30 dark:to-cyan-900/30 border-blue-200/50 dark:border-blue-700/50 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl text-gray-800 dark:text-gray-200">
                  <User className="h-6 w-6 text-blue-500" />
                  Personal Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 backdrop-blur-sm">
                    <User className="h-5 w-5 text-blue-500" />
                    <div>
                      <span className="font-medium text-gray-600 dark:text-gray-400">Name:</span>
                      <span className="font-bold text-lg ml-2 text-gray-800 dark:text-gray-200">John Doe</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 backdrop-blur-sm">
                    <GraduationCap className="h-5 w-5 text-green-500" />
                    <div>
                      <span className="font-medium text-gray-600 dark:text-gray-400">Neptun ID:</span>
                      <Badge variant="outline" className="ml-2 font-bold border-green-300 text-green-600 dark:border-green-600 dark:text-green-400">ABC123</Badge>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 backdrop-blur-sm">
                    <Mail className="h-5 w-5 text-purple-500" />
                    <div>
                      <span className="font-medium text-gray-600 dark:text-gray-400">Email:</span>
                      <a href="mailto:john.doe@example.com" className="font-bold text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 ml-2 transition-colors duration-300">
                        john.doe@example.com
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* About Project */}
            <Card className="bg-gradient-to-br from-pink-50/80 to-rose-50/80 dark:from-pink-900/30 dark:to-rose-900/30 border-pink-200/50 dark:border-pink-700/50 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl text-gray-800 dark:text-gray-200">
                  <PawPrint className="h-6 w-6 text-pink-500 animate-pulse" />
                  About Pet Catalogue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Pet Catalogue is a heartfelt web application built with modern React technologies. 
                  It helps pet owners create lasting memories and keep track of their beloved 
                  companions throughout their lives, celebrating both the joy of living pets 
                  and honoring those who have crossed the rainbow bridge.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500 animate-pulse" />
                  <span className="text-sm italic text-gray-500 dark:text-gray-500">
                    Made with love for pet parents everywhere
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technologies Used */}
          <Card className="bg-gradient-to-br from-purple-50/80 to-violet-50/80 dark:from-purple-900/30 dark:to-violet-900/30 border-purple-200/50 dark:border-purple-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-gray-800 dark:text-gray-200">
                <Code className="h-7 w-7 text-purple-500" />
                Technologies Used
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {technologies.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="group hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Badge 
                      variant="secondary" 
                      className={`w-full justify-center py-3 text-sm font-semibold bg-gradient-to-r ${tech.color} text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      <span className="mr-2 text-base">{tech.icon}</span>
                      {tech.name}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Project Features */}
          <Card className="bg-gradient-to-br from-green-50/80 to-emerald-50/80 dark:from-green-900/30 dark:to-emerald-900/30 border-green-200/50 dark:border-green-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-gray-800 dark:text-gray-200">
                <Sparkles className="h-7 w-7 text-green-500" />
                Project Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={feature.name}
                    className="flex items-center gap-3 p-3 bg-white/60 dark:bg-gray-800/40 rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/60 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <span className="text-2xl">{feature.icon}</span>
                    <span className={`font-medium ${feature.color}`}>✓</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Personal Interests */}
          <Card className="bg-gradient-to-br from-orange-50/80 to-yellow-50/80 dark:from-orange-900/30 dark:to-yellow-900/30 border-orange-200/50 dark:border-orange-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-gray-800 dark:text-gray-200">
                <Coffee className="h-7 w-7 text-orange-500" />
                When I'm Not Coding
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {hobbies.map((hobby, index) => (
                  <div 
                    key={hobby.name}
                    className="flex flex-col items-center gap-2 p-4 bg-white/60 dark:bg-gray-800/40 rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/60 transition-all duration-300 hover:scale-110 group backdrop-blur-sm"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <hobby.icon className={`h-8 w-8 ${hobby.color} group-hover:animate-bounce`} />
                    <span className="text-sm font-medium text-center text-gray-700 dark:text-gray-300">{hobby.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Inspirational Quote */}
          <Card className="bg-gradient-to-r from-yellow-50/80 via-orange-50/80 to-red-50/80 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 border-yellow-200/50 dark:border-yellow-700/50 backdrop-blur-sm">
            <CardContent className="text-center py-12">
              <div className="space-y-6">
                <div className="flex justify-center gap-4 text-4xl">
                  <span className="animate-bounce" style={{animationDelay: '0s'}}>🌟</span>
                  <span className="animate-bounce" style={{animationDelay: '0.5s'}}>💫</span>
                  <span className="animate-bounce" style={{animationDelay: '1s'}}>✨</span>
                </div>
                <blockquote className="text-2xl md:text-3xl italic font-medium text-gray-700 dark:text-gray-300 leading-relaxed">
                  "Every pet leaves paw prints on our hearts.<br />
                  This application helps preserve those precious memories."
                </blockquote>
                <div className="flex items-center justify-center gap-2 text-lg font-semibold">
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    — John Doe
                  </span>
                  <Heart className="h-5 w-5 text-red-500 animate-pulse" />
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}