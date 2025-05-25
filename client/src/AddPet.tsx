import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Heart, CheckCircle, Sparkles, Calendar, FileText, Tag } from "lucide-react";

interface PetFormData {
  name: string;
  species: string;
  birth_date: string;
  note: string;
}

export default function AddPet() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<PetFormData>({
    name: "",
    species: "",
    birth_date: "",
    note: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
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

    setIsSubmitting(true);

    // Simulate saving (in demo mode)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success and redirect
      alert(`✨ Welcome to the family, ${formData.name}! 🐾\n\nYour new ${formData.species.toLowerCase()} has been added to your pet catalogue.\n\nNote: This is demo mode - in a real app, this would save to a database.`);
      navigate("/pets");
    } catch (error) {
      setErrorMessage("Failed to add pet. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto flex items-center justify-center px-4 py-8">
      <Card className="w-full max-w-3xl overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-white via-pink-50 to-purple-50 dark:from-gray-900 dark:via-pink-900/10 dark:to-purple-900/10">
        {/* Animated top border */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-pulse"></div>
        
        <CardHeader className="text-center pb-6 pt-8">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <Sparkles className="h-6 w-6 text-yellow-400 absolute -top-2 -right-2 animate-bounce" />
            </div>
          </div>
          
          <CardTitle className="text-3xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Add New Pet
          </CardTitle>
          <p className="text-lg text-muted-foreground mt-2">
            Add a new companion to your pet catalogue
          </p>
          
          {/* Demo Mode Notice */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mt-6">
            <div className="flex items-center gap-3 text-blue-700 dark:text-blue-300">
              <CheckCircle className="h-5 w-5 flex-shrink-0" />
              <div className="text-left">
                <span className="font-semibold">Demo Mode Active</span>
                <p className="text-sm mt-1">New pets will be showcased but not permanently saved to demonstrate functionality</p>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="px-8 pb-8">
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Pet Basic Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Tag className="h-5 w-5 text-purple-500" />
                Pet Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <Heart className="h-4 w-4 text-pink-500" />
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
                
                <div className="space-y-3">
                  <label htmlFor="species" className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-purple-500" />
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
            </div>

            {/* Birth Date */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-500" />
                Important Dates
              </h3>
              
              <div className="space-y-3">
                <label htmlFor="birth_date" className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-blue-500" />
                  Date of Birth *
                </label>
                <Input
                  value={formData.birth_date}
                  onChange={handleChange}
                  id="birth_date"
                  type="date"
                  max={new Date().toISOString().split('T')[0]}
                  required
                  className="h-12 text-lg border-2 focus:border-blue-400 dark:focus:border-blue-600 transition-all duration-300 max-w-md"
                />
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <FileText className="h-5 w-5 text-green-500" />
                Special Notes
              </h3>
              
              <div className="space-y-3">
                <label htmlFor="note" className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-green-500" />
                  Notes & Memories
                </label>
                <textarea
                  value={formData.note}
                  onChange={handleChange}
                  id="note"
                  className="flex min-h-[120px] w-full rounded-lg border-2 border-input bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:border-green-400 dark:focus-visible:border-green-600 disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-all duration-300"
                  placeholder="Share special memories, personality traits, favorite activities, or anything that makes your pet unique... 🐾"
                />
              </div>
            </div>
            
            {/* Error Message */}
            {errorMessage && (
              <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
                <div className="text-red-600 dark:text-red-400 font-medium flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  {errorMessage}
                </div>
              </div>
            )}
            
            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="flex-1 h-14 text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Adding to Family...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    Add Pet to Family
                    <Sparkles className="h-4 w-4" />
                  </div>
                )}
              </Button>
              
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate("/pets")}
                className="flex-1 h-14 text-lg font-semibold border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
                disabled={isSubmitting}
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}