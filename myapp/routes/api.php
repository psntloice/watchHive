<?php
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\ActorController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ShowController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\WatchlistController;

Route::apiResource('authors', AuthorController::class);
Route::apiResource('actors', ActorController::class);
Route::apiResource('users', UserController::class);
Route::apiResource('shows', ShowController::class);
Route::apiResource('genres', GenreController::class);
Route::apiResource('watchlists', WatchlistController::class);
