import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Pet } from "./Home";
import { ArrowLeft, Edit3, CheckCircle } from "lucide-react";
import petData from "./dummy-data/pets.json";

interface PetFormData {
  name: string;
  species: string;
  birth_date: string;
  death_date: string | null;
  note: string;
}

export default function PetDetail() {
  const navigate = useNavigate();
  const params = useParams();
  const petId = Number(params.id);

  // Find pet from static data
  const pet = petData.find((p: Pet) => p.id === petId);

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
    if (pet) {
      setFormData({
        name: pet.name,
        species: pet.species,
        birth_date: pet.birth_date.split('T')[0], // Extract date part
        death_date: pet.death_date ? pet.death_date.split('T')[0] : null,
        note: pet.note || "",
      });
    }
  }, [pet]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.id]: e.target.id === 'death_date' && value === '' ? null : value,
    });
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
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success and redirect
      alert(`✅ Pet "${formData.name}" updated successfully!\n\nNote: This is demo mode. In a real app, this would save to a database.`);
      navigate("/pets");
    } catch (error) {
      setErrorMessage("Failed to update pet. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!pet) {
    return (
      <div className="container mx-auto flex items-center justify-center px-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="py-8">
            <div className="space-y-4">
              <div className="text-red-500 text-lg">Pet not found</div>
              <Button onClick={() => navigate("/pets")} variant="outline">
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
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <Edit3 className="h-6 w-6 text-blue-500" />
            Edit Pet: {pet.name}
          </CardTitle>
          <p className="text-muted-foreground">
            Update your pet's information
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-md p-3 mt-4">
            <div className="flex items-center gap-2 text-blue-700 text-sm">
              <CheckCircle className="h-4 w-4" />
              <span className="font-medium">Demo Mode:</span>
              <span>Changes will be shown but not permanently saved</span>
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
                value={formData.note}
                onChange={handleChange}
                id="note"
                className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                placeholder="Any special notes about your pet... (breed, personality, favorite activities, special memories, etc.)"
              />
            </div>
            
            {errorMessage && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3">
                <div className="text-red-600 text-sm">{errorMessage}</div>
              </div>
            )}
            
            <div className="flex gap-4 pt-4">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="flex-1"
              >
                {isSubmitting ? "Updating..." : "Update Pet"}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate("/pets")}
                className="flex-1 flex items-center gap-2"
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