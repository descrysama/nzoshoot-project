<?php

use App\Http\Controllers\API\AlbumController;
use App\Http\Controllers\API\FormuleController;
use App\Http\Controllers\API\ImageController;
use App\Http\Controllers\API\ContactController;
use App\Http\Controllers\API\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Authentification 

Route::post('/auth/check', [UserController::class, 'checkauth']); // permet de verifier le token et donc l'authentification de l'utilsateur
Route::post('/login', [UserController::class , 'login']); // Login
Route::post('/register', [UserController::class , 'store']); // Création d'un utilisateur pour la production (à supprimer avant le deploiement)

//Routes publiques non protégées 

Route::get('/tarifs', [FormuleController::class, 'index']);
Route::get('/albums', [AlbumController::class, 'index']);
Route::get('/album/{album_id}', [ImageController::class, 'index']);
Route::post('/contact', [ContactController::class, 'store']);

// Routes protégées pour l'administration

Route::get('/contact/{token}', [ContactController::class, 'index']);
Route::post('/album/delete/{album_id}', [AlbumController::class, 'destroy']);
Route::post('/album/create', [AlbumController::class, 'store']);
