<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\ProgramController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
 
Route::get('/user', [UserController::class, 'index']);
Route::post('/student_store', [StudentController::class, 'store']);
Route::get('/token', [StudentController::class, 'token']);
Route::post('/student_show', [StudentController::class, 'show']);
Route::post('/student_destroy', [StudentController::class, 'destroy']);
Route::get('/student_edit', [StudentController::class, 'edit']);
Route::post('/student_update', [StudentController::class, 'edit']);
Route::post('/program_store', [ProgramController::class, 'store']);

Route::post('/users_store', [UserController::class, 'store'])->middleware('web');

Route::view('/{path?}', 'welcome') ->where('path', '.*');