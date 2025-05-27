<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PetController;

// Pet routes
Route::apiResource('pets', PetController::class);

// Additional route for statistics
Route::get('pets-statistics', [PetController::class, 'statistics']);

// Health check route
Route::get('health', function () {
    return response()->json([
        'success' => true,
        'message' => 'Pet Catalogue API is running!',
        'timestamp' => now()
    ]);
});