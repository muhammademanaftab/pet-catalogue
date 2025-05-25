import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { useState } from "react";
import { useAuthStore } from "./useAuthStore";
import { useNavigate } from "react-router";
import { ArrowLeft, User, Mail, Lock, CheckCircle, Eye, EyeOff, Shield, Sparkles, Save, AlertCircle } from "lucide-react";

interface ProfileFormData {
  email: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export default function Profile() {
  const email = useAuthStore((state) => state.email);
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const [formData, setFormData] = useState<ProfileFormData>({
    email: email,
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    // Clear messages when user starts typing
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    
    // Validate email
    if (!formData.email || !formData.email.includes('@')) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    // If changing password, validate password fields
    if (formData.newPassword || formData.confirmPassword || formData.currentPassword) {
      if (!formData.currentPassword) {
        setErrorMessage("Current password is required to change password");
        return;
      }
      
      if (!formData.newPassword) {
        setErrorMessage("Please enter a new password");
        return;
      }
      
      if (formData.newPassword.length < 6) {
        setErrorMessage("New password must be at least 6 characters long");
        return;
      }
      
      if (formData.newPassword !== formData.confirmPassword) {
        setErrorMessage("New passwords do not match");
        return;
      }
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Update email in auth store if changed
      if (formData.email !== email) {
        const currentToken = useAuthStore.getState().token;
        login(formData.email, currentToken || "mock_token");
      }
      
      setSuccessMessage("Profile updated successfully! 🎉");
      
      // Clear password fields
      setFormData(prev => ({
        ...prev,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      }));
      
    } catch (error) {
      setErrorMessage("Failed to update profile. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto flex items-center justify-center px-4 py-8">
      <Card className="w-full max-w-2xl overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10">
        {/* Animated top border */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse"></div>
        
        <CardHeader className="text-center pb-6 pt-8">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                <User className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-white" />
              </div>
              <Sparkles className="absolute -bottom-2 -left-2 h-6 w-6 text-yellow-500 animate-bounce" />
            </div>
          </div>
          
          <CardTitle className="text-3xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Profile Settings
          </CardTitle>
          <p className="text-lg text-muted-foreground mt-2">
            Update your account information
          </p>
          
          {/* Demo Mode Notice */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mt-6">
            <div className="flex items-center gap-3 text-blue-700 dark:text-blue-300">
              <Shield className="h-5 w-5 flex-shrink-0" />
              <div className="text-left">
                <span className="font-semibold">Demo Mode Active</span>
                <p className="text-sm mt-1">Changes will be demonstrated but not permanently saved to a real database</p>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="px-8 pb-8">
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Email Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-500" />
                Email Address
              </h3>
              
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
            </div>

            {/* Password Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Lock className="h-5 w-5 text-purple-500" />
                Change Password
              </h3>
              
              <div className="space-y-4">
                <div className="space-y-3">
                  <label htmlFor="currentPassword" className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-gray-500" />
                    Current Password
                  </label>
                  <div className="relative">
                    <Input
                      value={formData.currentPassword}
                      onChange={handleChange}
                      id="currentPassword"
                      type={showCurrentPassword ? "text" : "password"}
                      placeholder="Enter current password"
                      className="h-12 text-lg border-2 focus:border-gray-400 dark:focus:border-gray-600 transition-all duration-300 pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
                    >
                      {showCurrentPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="newPassword" className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <Lock className="h-4 w-4 text-purple-500" />
                    New Password
                  </label>
                  <div className="relative">
                    <Input
                      value={formData.newPassword}
                      onChange={handleChange}
                      id="newPassword"
                      type={showNewPassword ? "text" : "password"}
                      placeholder="Enter new password (min. 6 characters)"
                      className="h-12 text-lg border-2 focus:border-purple-400 dark:focus:border-purple-600 transition-all duration-300 pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
                    >
                      {showNewPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <Input
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm new password"
                      className="h-12 text-lg border-2 focus:border-green-400 dark:focus:border-green-600 transition-all duration-300 pr-12"
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
              </div>
            </div>
            
            {/* Success Message */}
            {successMessage && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
                <div className="text-green-600 dark:text-green-400 font-medium flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  {successMessage}
                </div>
              </div>
            )}

            {/* Error Message */}
            {errorMessage && (
              <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
                <div className="text-red-600 dark:text-red-400 font-medium flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  {errorMessage}
                </div>
              </div>
            )}
            
            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="flex-1 h-14 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Saving Changes...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Save className="h-5 w-5" />
                    Save Changes
                    <CheckCircle className="h-4 w-4" />
                  </div>
                )}
              </Button>
              
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate(-1)}
                className="flex-1 h-14 text-lg font-semibold border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
                disabled={isSubmitting}
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Go Back
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}