<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;

class PetController extends Controller
{
    /**
     * Display a listing of the pets.
     */
    public function index(): JsonResponse
    {
        try {
            $pets = Pet::orderBy('created_at', 'desc')->get();
            
            return response()->json([
                'success' => true,
                'data' => $pets,
                'message' => 'Pets retrieved successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to retrieve pets',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Store a newly created pet in storage.
     */
    public function store(Request $request): JsonResponse
    {
        try {
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'species' => 'required|string|max:255',
                'birth_date' => 'required|date|before_or_equal:today',
                'death_date' => 'nullable|date|after:birth_date|before_or_equal:today',
                'note' => 'nullable|string|max:1000',
            ]);

            $pet = Pet::create($validatedData);

            return response()->json([
                'success' => true,
                'data' => $pet,
                'message' => 'Pet created successfully'
            ], 201);

        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to create pet',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified pet.
     */
    public function show($id): JsonResponse
    {
        try {
            $pet = Pet::findOrFail($id);

            return response()->json([
                'success' => true,
                'data' => $pet,
                'message' => 'Pet retrieved successfully'
            ]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Pet not found'
            ], 404);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to retrieve pet',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Update the specified pet in storage.
     */
    public function update(Request $request, $id): JsonResponse
    {
        try {
            $pet = Pet::findOrFail($id);

            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'species' => 'required|string|max:255',
                'birth_date' => 'required|date|before_or_equal:today',
                'death_date' => 'nullable|date|after:birth_date|before_or_equal:today',
                'note' => 'nullable|string|max:1000',
            ]);

            $pet->update($validatedData);

            return response()->json([
                'success' => true,
                'data' => $pet->fresh(),
                'message' => 'Pet updated successfully'
            ]);

        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Pet not found'
            ], 404);
        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to update pet',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified pet from storage.
     */
    public function destroy($id): JsonResponse
    {
        try {
            $pet = Pet::findOrFail($id);
            $petName = $pet->name;
            $pet->delete();

            return response()->json([
                'success' => true,
                'message' => "Pet '{$petName}' deleted successfully"
            ]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Pet not found'
            ], 404);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to delete pet',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get statistics about pets.
     */
    public function statistics(): JsonResponse
    {
        try {
            $totalPets = Pet::count();
            $livingPets = Pet::whereNull('death_date')->count();
            $deceasedPets = Pet::whereNotNull('death_date')->count();
            $speciesCount = Pet::distinct('species')->count();
            
            $speciesBreakdown = Pet::selectRaw('species, count(*) as count')
                ->groupBy('species')
                ->orderBy('count', 'desc')
                ->get();

            return response()->json([
                'success' => true,
                'data' => [
                    'total_pets' => $totalPets,
                    'living_pets' => $livingPets,
                    'deceased_pets' => $deceasedPets,
                    'species_count' => $speciesCount,
                    'species_breakdown' => $speciesBreakdown
                ],
                'message' => 'Statistics retrieved successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to retrieve statistics',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}