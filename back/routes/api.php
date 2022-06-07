<?php

use App\Http\Controllers\API\AlbumController;
use App\Http\Controllers\API\FormuleController;
use App\Http\Controllers\API\ImageController;
use App\Http\Controllers\API\ContactController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/tarifs', [FormuleController::class, 'index']);
Route::get('/albums', [AlbumController::class, 'index']);
Route::get('/album/{album_id}', [ImageController::class, 'index']);

Route::get('/contact', [ContactController::class, 'index']);
Route::post('/contact', [ContactController::class, 'store']);

