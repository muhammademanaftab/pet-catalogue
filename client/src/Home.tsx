import { Link } from "react-router";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { useState, useEffect } from "react";
import { apiService, Pet, handleApiError } from "./services/api";
import { Heart, Sparkles, PawPrint, Star, Loader2 } from "lucide-react";

export function Home() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await apiService.getAllPets();
        
        if (response.success) {
          setPets(response.data);
        } else {
          setError(response.message || 'Failed to fetch pets');
        }
      } catch (err) {
        setError(handleApiError(err));
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  const livingPets = pets.filter(pet => !pet.death_date).length;
  const deceasedPets = pets.filter(pet => pet.death_date).length;

  if (loading) {
    return (
      <div className="container max-w-6xl mx-auto px-4 flex items-center justify-center min-h-[60vh]">
        <Card className="p-8 text-center">
          <CardContent>
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-pink-500" />
            <p className="text-lg text-muted-foreground">Loading your pet collection...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container max-w-6xl mx-auto px-4 flex items-center justify-center min-h-[60vh]">
        <Card className="p-8 text-center border-red-200 bg-red-50 dark:bg-red-900/20">
          <CardContent>
            <div className="text-red-500 text-4xl mb-4">⚠️</div>
            <p className="text-lg text-red-600 dark:text-red-400 mb-4">
              Unable to connect to the server
            </p>
            <p className="text-sm text-muted-foreground mb-4">{error}</p>
            <Button 
              onClick={() => window.location.reload()} 
              variant="outline"
              className="border-red-300 text-red-600 hover:bg-red-50"
            >
              Try Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container max-w-6xl mx-auto px-4 space-y-12">
      {/* Animated Hero Section */}
      <div className="text-center space-y-8 relative">
        {/* Floating elements */}
        <div className="absolute top-0 left-1/4 w-4 h-4 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-8 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-16 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        
        <div className="space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-blue-100 dark:from-pink-900/20 dark:to-blue-900/20 px-4 py-2 rounded-full border">
            <Sparkles className="h-4 w-4 text-yellow-500 animate-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
              Welcome to Pet Catalogue
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
              🐾 Pet
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-green-500 to-pink-500 bg-clip-text text-transparent">
              Catalogue
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Keep track of your beloved companions throughout their lives. 
            Create lasting memories and honor the pets who have touched your heart.
          </p>
        </div>

        {/* Animated Pet Icons */}
        <div className="relative max-w-md mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="relative">
            <div className="grid grid-cols-4 gap-4 text-6xl">
              <div className="hover:scale-110 transition-transform duration-300 cursor-pointer animate-bounce" style={{animationDelay: '0s'}}>🐕</div>
              <div className="hover:scale-110 transition-transform duration-300 cursor-pointer animate-bounce" style={{animationDelay: '0.5s'}}>🐱</div>
              <div className="hover:scale-110 transition-transform duration-300 cursor-pointer animate-bounce" style={{animationDelay: '1s'}}>🐰</div>
              <div className="hover:scale-110 transition-transform duration-300 cursor-pointer animate-bounce" style={{animationDelay: '1.5s'}}>🐹</div>
            </div>
            <div className="grid grid-cols-4 gap-4 text-4xl mt-2">
              <div className="hover:scale-110 transition-transform duration-300 cursor-pointer animate-bounce" style={{animationDelay: '2s'}}>🐦</div>
              <div className="hover:scale-110 transition-transform duration-300 cursor-pointer animate-bounce" style={{animationDelay: '2.5s'}}>🐢</div>
              <div className="hover:scale-110 transition-transform duration-300 cursor-pointer animate-bounce" style={{animationDelay: '3s'}}>🐠</div>
              <div className="hover:scale-110 transition-transform duration-300 cursor-pointer animate-bounce" style={{animationDelay: '3.5s'}}>🦔</div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section - Always show */}
      <Card className="max-w-3xl mx-auto overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-white via-pink-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"></div>
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-3xl font-bold flex items-center justify-center gap-3">
            <Heart className="h-8 w-8 text-red-500 animate-pulse" />
            Pet Statistics
            <Sparkles className="h-6 w-6 text-yellow-500" />
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6 pb-8">
          {pets.length > 0 ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-green-600 dark:text-green-400">{livingPets}</div>
                    <div className="text-green-700 dark:text-green-300 font-medium">Living Pet{livingPets !== 1 ? 's' : ''}</div>
                    <div className="text-2xl mt-2">💚</div>
                  </CardContent>
                </Card>
                
                {deceasedPets > 0 && (
                  <Card className="bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-800/50 dark:to-slate-800/50 border-gray-200 dark:border-gray-700">
                    <CardContent className="pt-6">
                      <div className="text-4xl font-bold text-gray-600 dark:text-gray-400">{deceasedPets}</div>
                      <div className="text-gray-700 dark:text-gray-300 font-medium">Remembered Pet{deceasedPets !== 1 ? 's' : ''}</div>
                      <div className="text-2xl mt-2">💫</div>
                    </CardContent>
                  </Card>
                )}
              </div>
              
              <p className="text-xl leading-relaxed text-muted-foreground">
                You have <span className="font-bold text-green-600">{livingPets}</span> living companion{livingPets !== 1 ? 's' : ''}
                {deceasedPets > 0 && (
                  <>. And you said goodbye to <span className="font-bold text-gray-600">{deceasedPets}</span> beloved pet{deceasedPets !== 1 ? 's' : ''}</>
                )}.
              </p>
              
              <Link to="/pets">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <PawPrint className="h-5 w-5 mr-2" />
                  View My Pets
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-6xl animate-bounce">🐾</div>
              <p className="text-xl text-muted-foreground">Your pet journey is about to begin!</p>
              <Link to="/pets/new">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Heart className="h-5 w-5 mr-2" />
                  Add Your First Pet
                </Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Enhanced Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Card className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/10 dark:to-rose-900/10 border-pink-200 dark:border-pink-800">
          <CardHeader className="text-center">
            <div className="text-4xl mb-4 group-hover:animate-bounce">📝</div>
            <CardTitle className="text-xl bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Track Every Detail</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Record names, species, birth dates, and special notes. Create a comprehensive profile for each beloved companion.
            </p>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/10 dark:to-violet-900/10 border-purple-200 dark:border-purple-800">
          <CardHeader className="text-center">
            <div className="text-4xl mb-4 group-hover:animate-pulse">💝</div>
            <CardTitle className="text-xl bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Honor Their Memory</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Keep precious memories alive of pets who have crossed the rainbow bridge. Their love lives on forever.
            </p>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 border-blue-200 dark:border-blue-800">
          <CardHeader className="text-center">
            <div className="text-4xl mb-4 group-hover:animate-spin">📊</div>
            <CardTitle className="text-xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Beautiful Statistics</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground leading-relaxed">
              View elegant overviews of your pet family. See your current companions and cherished memories at a glance.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Testimonial Section */}
      <Card className="max-w-4xl mx-auto bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-900/10 dark:via-orange-900/10 dark:to-yellow-900/10 border-amber-200 dark:border-amber-800">
        <CardContent className="text-center py-12">
          <div className="text-6xl mb-6">🌟</div>
          <blockquote className="text-2xl italic text-muted-foreground mb-4">
            "Every pet leaves paw prints on our hearts. This application helps preserve those precious memories."
          </blockquote>
          <div className="text-lg font-semibold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            — Pet Lovers Everywhere
          </div>
        </CardContent>
      </Card>
    </div>
  );
}