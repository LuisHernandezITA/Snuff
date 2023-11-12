<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\AccessTokensController;
use App\Http\Controllers\ProductColorsController;
use App\Http\Controllers\ProductSizesController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ColorController;
use App\Http\Controllers\SizeController;



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
Route::post('/getProductSizes', [ProductSizesController::class, 'getProductSizes']);
Route::post('/products_store', [ProductsController::class, 'store']); // Ruta para crear un producto
Route::put('/products_update/{id}', [ProductsController::class, 'update']); // Ruta para actualizar un producto
Route::delete('/products_destroy/{id}', [ProductsController::class, 'destroy']);
Route::get('/products/{id}/edit', [ProductsController::class, 'edit']);

Route::get('/category_index', [CategoryController::class, 'index']);
Route::get('/color_index', [ColorController::class, 'index']);
Route::get('/size_index', [SizeController::class, 'index']);
Route::post('/productcolors_store', [ProductColorsController::class, 'store']);
Route::delete('/productcolors_destroy/{id}', [ProductColorsController::class, 'destroy']);
Route::post('/productsizes_store', [ProductSizesController::class, 'store']);
Route::delete('/productsizes_destroy/{id}', [ProductSizesController::class, 'destroy']);



Route::middleware('auth:api')->get('/index', 'app\Http\Controllers\UserController@index');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
