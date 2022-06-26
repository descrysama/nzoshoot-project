<?php

use App\Http\Controllers\API\AlbumController;
use App\Http\Controllers\API\FormuleController;
use App\Http\Controllers\API\ImageController;
use App\Http\Controllers\API\ContactController;
use App\Http\Controllers\API\WebParamsController;
use App\Http\Controllers\API\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


// Authentification 

Route::post('/auth/check', [UserController::class, 'checkauth']); // permet de verifier le token et donc l'authentification de l'utilsateur
Route::post('/login', [UserController::class , 'login']); // Login
Route::post('/resetpassword', [UserController::class , 'providetoken']); // Login
Route::post('/resetpassword/checktoken', [UserController::class , 'checktoken']); 
Route::post('/resetpassword/changepassword', [UserController::class , 'update']); 
// Route::post('/register', [UserController::class , 'store']); // Création d'un utilisateur pour la production (à supprimer avant le deploiement)

//Routes publiques non protégées 

Route::get('/tarifs', [FormuleController::class, 'index']);
Route::get('/albums', [AlbumController::class, 'index']);
Route::get('/album/{album_id}', [ImageController::class, 'index']);
Route::post('/contact', [ContactController::class, 'store']);

// Routes protégées pour l'administration
Route::middleware(['cors'])->group(function () {
    Route::get('/contact/{token}', [ContactController::class, 'index']); // Retourne tout les envoi par le formulaire de contact
    Route::post('/contact/delete', [ContactController::class, 'destroy']); // Retourne tout les envoi par le formulaire de contact
    Route::post('/album/delete/{album_id}', [AlbumController::class, 'destroy']); // suppression de l'album avec l'image de sa cover
    Route::post('/image/delete/{image_id}', [ImageController::class, 'destroy']); // suppression de l'album avec son image et les images contenues dans l'album
    Route::get('/album/edit/{album_id}', [AlbumController::class, 'show']); // Retourne les données de l'album pour l'afficher dans la page d'edit
    Route::post('/album/edit/{album_id}', [AlbumController::class, 'update']); // update album
    Route::post('/album/create', [AlbumController::class, 'store']);
    Route::post('/image/create', [ImageController::class, 'store']);
    Route::post('/tarif/delete', [FormuleController::class, 'destroy']); // suppression de la formule
    Route::post('/tarif/create', [FormuleController::class, 'store']); // création de la formule
    Route::post('/tarif/edit/{formule_id}', [FormuleController::class, 'update']); // update formule
    Route::get('/params', [WebParamsController::class, 'index']);
    Route::post('/params', [WebParamsController::class, 'update']);
});


