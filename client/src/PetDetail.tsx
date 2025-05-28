import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { apiService, Pet, PetFormData, handleApiError } from "./services/api";
import { ArrowLeft, Edit3, CheckCircle, Loader2 } from "lucide-react";

export default function PetDetail() {
  const navigate = useNavigate();
  const params = useParams();
  const petId = Number(params.id);

  const [pet, setPet] = useState<Pet | null>(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState<PetFormData>({
    name: "",
    species: "",
    birth_date: "",
    death_date: null,
    note: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchPet = async () => {
      try {
        setLoading(true);
        const response = await apiService.getPet(petId);
        
        if (response.success) {
          const petData = response.data;
          setPet(petData);
          setFormData({
            name: petData.name,
            species: petData.species,
            birth_date: petData.birth_date.split('T')[0], // Extract date part
            death_date: petData.death_date ? petData.death_date.split('T')[0] : null,
            note: petData.note || "",
          });
        } else {
          setErrorMessage(response.message || 'Pet not found');
        }
      } catch (error) {
        setErrorMessage(handleApiError(error));
      } finally {
        setLoading(false);
      }
    };

    if (petId) {
      fetchPet();
    }
  }, [petId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.id]: e.target.id === 'death_date' && value === '' ? null : value,
    });
    // Clear error when user starts typing
    setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    
    if (!formData.name || !formData.species || !formData.birth_date) {
      setErrorMessage("Please fill in all required fields");
      return;
    }

    // Validate birth date is not in the future
    const today = new Date().toISOString().split('T')[0];
    if (formData.birth_date > today) {
      setErrorMessage("Birth date cannot be in the future");
      return;
    }

    // Validate death date is after birth date if provided
    if (formData.death_date && formData.death_date < formData.birth_date) {
      setErrorMessage("Death date cannot be before birth date");
      return;
    }

    // Validate death date is not in the future
    if (formData.death_date && formData.death_date > today) {
      setErrorMessage("Death date cannot be in the future");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await apiService.updatePet(petId, formData);
      
      if (response.success) {
        alert(`✅ Pet "${formData.name}" updated successfully! 🐾`);
        navigate("/pets");
      } else {
        setErrorMessage(response.message || "Failed to update pet");
      }
    } catch (error) {
      setErrorMessage(handleApiError(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto flex items-center justify-center px-4 py-8">
        <Card className="w-full max-w-2xl text-center p-8">
          <CardContent>
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-pink-500" />
            <p className="text-lg text-muted-foreground">Loading pet details...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!pet || errorMessage) {
    return (
      <div className="container mx-auto flex items-center justify-center px-4">
        <Card className="w-full max-w-md text-center border-red-200 bg-red-50 dark:bg-red-900/20">
          <CardContent className="py-8">
            <div className="space-y-4">
              <div className="text-red-500 text-4xl">⚠️</div>
              <div className="text-red-600 dark:text-red-400 text-lg font-medium">
                {errorMessage || "Pet not found"}
              </div>
              <Button 
                onClick={() => navigate("/pets")} 
                variant="outline"
                className="border-red-300 text-red-600 hover:bg-red-50"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Pets
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto flex items-center justify-center px-4">
      <Card className="w-full max-w-2xl overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10">
        {/* Animated top border */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse"></div>
        
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <Edit3 className="h-6 w-6 text-blue-500" />
            Edit Pet: {pet.name}
          </CardTitle>
          <p className="text-muted-foreground">
            Update your pet's information
          </p>
          <div className="bg-green-50 dark:from-green-900/20 border border-green-200 dark:border-green-800 rounded-md p-3 mt-4">
            <div className="flex items-center gap-2 text-green-700 dark:text-green-300 text-sm">
              <CheckCircle className="h-4 w-4" />
              <span className="font-medium">Connected to Database:</span>
              <span>Changes will be permanently saved</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Pet Name *
                </label>
                <Input
                  value={formData.name}
                  onChange={handleChange}
                  id="name"
                  type="text"
                  placeholder="e.g. Fluffy, Buddy, Charlie"
                  required
                  className="h-12 text-lg border-2 focus:border-pink-400 dark:focus:border-pink-600 transition-all duration-300"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="species" className="text-sm font-medium">
                  Species *
                </label>
                <Input
                  value={formData.species}
                  onChange={handleChange}
                  id="species"
                  type="text"
                  placeholder="e.g. Cat, Dog, Bird, Hamster"
                  required
                  className="h-12 text-lg border-2 focus:border-purple-400 dark:focus:border-purple-600 transition-all duration-300"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="birth_date" className="text-sm font-medium">
                  Date of Birth *
                </label>
                <Input
                  value={formData.birth_date}
                  onChange={handleChange}
                  id="birth_date"
                  type="date"
                  max={new Date().toISOString().split('T')[0]}
                  required
                  className="h-12 text-lg border-2 focus:border-blue-400 dark:focus:border-blue-600 transition-all duration-300"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="death_date" className="text-sm font-medium">
                  Date of Death
                  <span className="text-xs text-muted-foreground ml-1">(optional)</span>
                </label>
                <Input
                  value={formData.death_date || ""}
                  onChange={handleChange}
                  id="death_date"
                  type="date"
                  max={new Date().toISOString().split('T')[0]}
                  className="h-12 text-lg border-2 focus:border-gray-400 dark:focus:border-gray-600 transition-all duration-300"
                />
                <p className="text-xs text-muted-foreground">
                  Leave empty if your pet is still with you
                </p>
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="note" className="text-sm font-medium">
                Note
              </label>
              <textarea
                value={formData.note || ""}
                onChange={handleChange}
                id="note"
                className="flex min-h-[100px] w-full rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-green-400 dark:focus-visible:border-green-600 focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-all duration-300"
                placeholder="Any special notes about your pet... (breed, personality, favorite activities, special memories, etc.)"
              />
            </div>
            
            {errorMessage && (
              <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
                <div className="text-red-600 dark:text-red-400 font-medium flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  {errorMessage}
                </div>
              </div>
            )}
            
            <div className="flex gap-4 pt-4">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="flex-1 h-12 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Updating...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Update Pet
                  </div>
                )}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate("/pets")}
                className="flex-1 h-12 text-lg font-semibold border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none flex items-center gap-2"
                disabled={isSubmitting}
              >
                <ArrowLeft className="h-4 w-4" />
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}