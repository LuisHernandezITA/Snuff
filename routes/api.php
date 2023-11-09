<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\AccessTokensController;
use App\Http\Controllers\ProductColorsController;
use App\Http\Controllers\ColorController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('register', [RegisterController::class, 'register']);
Route::post('login', [RegisterController::class, 'login']);
Route::get('/user_index', [UserController::class, 'index']);
Route::post('/user_show', [UserController::class, 'show']);
Route::get('/products_index', [ProductsController::class, 'index']);
Route::get('/products_newest', [ProductsController::class, 'newest']);
Route::post('/products_show', [ProductsController::class, 'show']);
Route::get('/accesstokens_index', [AccessTokensController::class, 'index']);
Route::delete('/accesstokens/destroy', [AccessTokensController::class, 'destroy']);
Route::post('/getProductColors', [ProductColorsController::class, 'getProductColors']);
Route::post('/getColorsByIds', [ProductColorsController::class, 'getColorsByIds']);


Route::middleware('auth:api')->get('/index', 'app\Http\Controllers\UserController@index');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
