import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { useState } from "react";
import { useAuthStore } from "./useAuthStore";
import { useNavigate, Link } from "react-router";
import { Heart, Mail, Lock, Eye, EyeOff, Sparkles, UserPlus, LogIn, PawPrint, Star, User, CheckCircle } from "lucide-react";

export function Register() {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    setErrorMessage(""); // Clear error when user starts typing
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    // Validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setErrorMessage("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    if (!formData.email.includes('@')) {
      setErrorMessage("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo purposes, generate a mock token and auto-login
      const mockToken = `mock_token_${Date.now()}`;
      
      login(formData.email, mockToken);
      navigate("/");
    } catch (error) {
      setErrorMessage("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto flex items-center justify-center min-h-[80vh] px-4 py-8">
      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-8 w-3 h-3 bg-blue-300 rounded-full opacity-50 animate-bounce" style={{animationDelay: '0s'}}></div>
      <div className="absolute top-1/3 right-16 w-2 h-2 bg-green-300 rounded-full opacity-60 animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-purple-300 rounded-full opacity-40 animate-bounce" style={{animationDelay: '2s'}}></div>

      <Card className="w-full max-w-lg overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-white via-blue-50 to-green-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-green-900/10 relative">
        {/* Animated top border */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 animate-pulse"></div>
        
        <CardHeader className="text-center pb-6 pt-8">
          {/* Animated Logo */}
          <div className="flex justify-center mb-4">
            <div className="relative group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center animate-pulse group-hover:scale-110 transition-all duration-300">
                <UserPlus className="h-8 w-8 text-white" />
              </div>
              <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-yellow-400 animate-bounce" />
              <Heart className="absolute -bottom-2 -left-2 h-5 w-5 text-green-500 animate-pulse" />
            </div>
          </div>
          
          <CardTitle className="text-3xl font-black bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Join Pet Catalogue!
          </CardTitle>
          <p className="text-lg text-muted-foreground">
            Create your account to start your pet journey
          </p>
          
          {/* Welcome Message */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 mt-6">
            <div className="flex items-center gap-3 text-green-700 dark:text-green-300">
              <Star className="h-5 w-5 text-yellow-500 animate-pulse" />
              <div className="text-left">
                <span className="font-semibold">Quick Demo Registration</span>
                <p className="text-sm mt-1">Fill in the form to create your pet catalogue account instantly</p>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="px-8 pb-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="space-y-3">
              <label htmlFor="name" className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <User className="h-4 w-4 text-green-500" />
                Full Name
              </label>
              <Input
                value={formData.name}
                onChange={handleChange}
                id="name"
                type="text"
                placeholder="Enter your full name"
                required
                className="h-12 text-lg border-2 focus:border-green-400 dark:focus:border-green-600 transition-all duration-300"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-3">
              <label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-500" />
                Email Address
              </label>
              <Input
                value={formData.email}
                onChange={handleChange}
                id="email"
                type="email"
                placeholder="your.email@example.com"
                required
                className="h-12 text-lg border-2 focus:border-blue-400 dark:focus:border-blue-600 transition-all duration-300"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-3">
              <label htmlFor="password" className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <Lock className="h-4 w-4 text-purple-500" />
                Password
              </label>
              <div className="relative">
                <Input
                  value={formData.password}
                  onChange={handleChange}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password (min. 6 characters)"
                  required
                  className="h-12 text-lg border-2 focus:border-purple-400 dark:focus:border-purple-600 transition-all duration-300 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-3">
              <label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                Confirm Password
              </label>
              <div className="relative">
                <Input
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  required
                  className="h-12 text-lg border-2 focus:border-emerald-400 dark:focus:border-emerald-600 transition-all duration-300 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
                <div className="text-red-600 dark:text-red-400 font-medium text-sm">
                  {errorMessage}
                </div>
              </div>
            )}

            {/* Register Button */}
            <Button 
              type="submit" 
              className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none" 
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Creating Account...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <UserPlus className="h-5 w-5" />
                  Create Account
                  <PawPrint className="h-4 w-4 animate-pulse" />
                </div>
              )}
            </Button>
            
            {/* Login Link */}
            <div className="text-center space-y-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white dark:bg-gray-900 px-4 text-gray-500">or</span>
                </div>
              </div>
              
              <p className="text-muted-foreground">
                Already have an account?{" "}
                <Link 
                  to="/login"
                  className="font-semibold text-transparent bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text hover:from-blue-700 hover:to-green-700 transition-all duration-300"
                >
                  Sign In
                </Link>
              </p>
            </div>

            {/* Demo Info */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-4">
              <div className="text-center">
                <div className="text-purple-600 dark:text-purple-400 font-medium text-sm flex items-center justify-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Demo Mode: Registration will auto-login you to explore features
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}