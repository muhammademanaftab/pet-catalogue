// API Configuration
const API_BASE_URL = 'http://localhost:8000/api';

// Types
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
  errors?: any;
}

export interface Pet {
  id: number;
  name: string;
  species: string;
  birth_date: string;
  death_date: string | null;
  note: string | null;
  created_at: string;
  updated_at: string;
}

export interface PetFormData {
  name: string;
  species: string;
  birth_date: string;
  death_date?: string | null;
  note?: string;
}

export interface PetStatistics {
  total_pets: number;
  living_pets: number;
  deceased_pets: number;
  species_count: number;
  species_breakdown: Array<{
    species: string;
    count: number;
  }>;
}

// API Service Class
class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Health Check
  async healthCheck(): Promise<ApiResponse<any>> {
    return this.request('/health');
  }

  // Pet Operations
  async getAllPets(): Promise<ApiResponse<Pet[]>> {
    return this.request('/pets');
  }

  async getPet(id: number): Promise<ApiResponse<Pet>> {
    return this.request(`/pets/${id}`);
  }

  async createPet(petData: PetFormData): Promise<ApiResponse<Pet>> {
    return this.request('/pets', {
      method: 'POST',
      body: JSON.stringify(petData),
    });
  }

  async updatePet(id: number, petData: PetFormData): Promise<ApiResponse<Pet>> {
    return this.request(`/pets/${id}`, {
      method: 'PUT',
      body: JSON.stringify(petData),
    });
  }

  async deletePet(id: number): Promise<ApiResponse<any>> {
    return this.request(`/pets/${id}`, {
      method: 'DELETE',
    });
  }

  async getPetStatistics(): Promise<ApiResponse<PetStatistics>> {
    return this.request('/pets-statistics');
  }
}

// Export singleton instance
export const apiService = new ApiService();

// Utility function to handle API errors
export const handleApiError = (error: any): string => {
  if (error.message) {
    return error.message;
  }
  return 'An unexpected error occurred. Please try again.';
};