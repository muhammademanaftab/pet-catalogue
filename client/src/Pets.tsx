import { useState, useEffect } from "react";
import { apiService, Pet, handleApiError } from "./services/api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import { Button } from "./components/ui/button";
import { Link } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Plus, Edit, Heart, Sparkles, Calendar, FileText, Activity, Loader2, RefreshCw } from "lucide-react";

export function Pets() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchPets = async (showRefreshing = false) => {
    try {
      if (showRefreshing) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }
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
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const getSpeciesEmoji = (species: string) => {
    const speciesMap: { [key: string]: string } = {
      'Cat': '🐱',
      'Dog': '🐕',
      'Bird': '🐦',
      'Fish': '🐠',
      'Rabbit': '🐰',
      'Hamster': '🐹',
      'Guinea Pig': '🐹',
      'Turtle': '🐢',
      'Hedgehog': '🦔',
    };
    return speciesMap[species] || '🐾';
  };

  if (loading) {
    return (
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-center min-h-[60vh]">
        <Card className="p-8 text-center">
          <CardContent>
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-pink-500" />
            <p className="text-lg text-muted-foreground">Loading your pets...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-center min-h-[60vh]">
        <Card className="p-8 text-center border-red-200 bg-red-50 dark:bg-red-900/20 max-w-md">
          <CardContent>
            <div className="text-red-500 text-4xl mb-4">⚠️</div>
            <p className="text-lg text-red-600 dark:text-red-400 mb-4">
              Unable to load pets
            </p>
            <p className="text-sm text-muted-foreground mb-4">{error}</p>
            <Button 
              onClick={() => fetchPets()} 
              variant="outline"
              className="border-red-300 text-red-600 hover:bg-red-50"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container max-w-7xl mx-auto px-4 space-y-8">
      {/* Beautiful Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-blue-100 dark:from-pink-900/20 dark:to-blue-900/20 px-4 py-2 rounded-full border mb-4">
          <Heart className="h-4 w-4 text-red-500 animate-pulse" />
          <span className="text-sm font-medium bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
            Pet Management
          </span>
        </div>
        
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              My Pets Collection
            </h1>
            <p className="text-muted-foreground mt-2">Manage and cherish your beloved companions</p>
          </div>
          
          <div className="flex gap-3">
            <Button
              onClick={() => fetchPets(true)}
              disabled={refreshing}
              variant="outline"
              className="flex items-center gap-2"
            >
              <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Link to="/pets/new">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Add New Pet
                <Sparkles className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {pets.length === 0 ? (
        <Card className="max-w-lg mx-auto text-center overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-white via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"></div>
          <CardHeader>
            <CardTitle className="text-2xl">No Pets Yet</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6 py-4">
              <div className="text-8xl animate-bounce">🐾</div>
              <p className="text-lg text-muted-foreground">
                Your pet collection is waiting to be filled with love!
              </p>
              <Link to="/pets/new">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Add Your First Pet
                  <Sparkles className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">{pets.filter(p => !p.death_date).length}</div>
                    <div className="text-green-700 dark:text-green-300 font-medium text-sm">Living</div>
                  </div>
                  <Activity className="h-8 w-8 text-green-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-800/50 dark:to-slate-800/50 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-600 dark:text-gray-400">{pets.filter(p => p.death_date).length}</div>
                    <div className="text-gray-700 dark:text-gray-300 font-medium text-sm">Remembered</div>
                  </div>
                  <Heart className="h-8 w-8 text-gray-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{new Set(pets.map(p => p.species)).size}</div>
                    <div className="text-blue-700 dark:text-blue-300 font-medium text-sm">Species</div>
                  </div>
                  <Sparkles className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{pets.length}</div>
                    <div className="text-purple-700 dark:text-purple-300 font-medium text-sm">Total Pets</div>
                  </div>
                  <FileText className="h-8 w-8 text-purple-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Beautiful Table */}
          <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"></div>
            <CardHeader className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border-b">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Heart className="h-6 w-6 text-red-500" />
                Pet Details
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 hover:bg-gradient-to-r">
                      <TableHead className="font-bold text-center">Pet</TableHead>
                      <TableHead className="font-bold">Name</TableHead>
                      <TableHead className="font-bold">Species</TableHead>
                      <TableHead className="font-bold">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Birth Date
                        </div>
                      </TableHead>
                      <TableHead className="font-bold">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Death Date
                        </div>
                      </TableHead>
                      <TableHead className="font-bold max-w-xs">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4" />
                          Note
                        </div>
                      </TableHead>
                      <TableHead className="font-bold">Status</TableHead>
                      <TableHead className="font-bold">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pets.map((pet, index) => (
                      <TableRow 
                        key={pet.id} 
                        className="hover:bg-gradient-to-r hover:from-pink-50 hover:to-blue-50 dark:hover:from-pink-900/10 dark:hover:to-blue-900/10 transition-all duration-300 group"
                        style={{
                          animationDelay: `${index * 100}ms`,
                        }}
                      >
                        <TableCell className="text-center">
                          <div className="text-3xl group-hover:animate-bounce transition-all duration-300">
                            {getSpeciesEmoji(pet.species)}
                          </div>
                        </TableCell>
                        <TableCell className="font-bold text-lg">{pet.name}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{pet.species}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{formatDate(pet.birth_date)}</TableCell>
                        <TableCell className="text-muted-foreground">
                          {pet.death_date ? formatDate(pet.death_date) : "—"}
                        </TableCell>
                        <TableCell className="max-w-xs">
                          <div className="truncate" title={pet.note || ""}>
                            {pet.note ? (
                              <span className="text-sm text-muted-foreground">{pet.note}</span>
                            ) : (
                              <span className="text-sm text-gray-400 italic">—</span>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant={pet.death_date ? "outline" : "default"}
                            className={
                              pet.death_date 
                                ? "text-gray-600 border-gray-300 bg-gray-50 dark:bg-gray-800" 
                                : "text-green-700 bg-gradient-to-r from-green-100 to-emerald-100 border-green-200 dark:from-green-900/30 dark:to-emerald-900/30 dark:border-green-700"
                            }
                          >
                            {pet.death_date ? "💫 Remembered" : "💚 Living"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Link to={`/pets/${pet.id}`}>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="flex items-center gap-2 hover:bg-gradient-to-r hover:from-pink-50 hover:to-blue-50 dark:hover:from-pink-900/20 dark:hover:to-blue-900/20 transition-all duration-300 group-hover:scale-105"
                            >
                              <Edit className="h-4 w-4" />
                              Edit
                            </Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Beautiful Footer Stats */}
          <Card className="bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 dark:from-purple-900/10 dark:via-pink-900/10 dark:to-blue-900/10 border-purple-200 dark:border-purple-800">
            <CardContent className="py-6">
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-4 text-lg font-semibold">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-purple-500" />
                    <span>Total: {pets.length} pet{pets.length !== 1 ? 's' : ''}</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-green-500" />
                    <span>Living: {pets.filter(p => !p.death_date).length}</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-gray-500" />
                    <span>Remembered: {pets.filter(p => p.death_date).length}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Each pet in your collection holds a special place in your heart 💖
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}