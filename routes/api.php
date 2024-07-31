<?php

use App\Http\Controllers\MasterCustomerController;
use App\Http\Controllers\MasterItemController;
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

// Items
Route::get('/items', [MasterItemController::class, 'index']);
Route::post('/items', [MasterItemController::class, 'store']);
Route::delete('/items/{id}', [MasterItemController::class, 'destroy']);
Route::get('/items/{id}', [MasterItemController::class, 'show']);
Route::put('/items/{id}', [MasterItemController::class, 'update']);

// Customers
Route::get('/customers', [MasterCustomerController::class, 'index']);
Route::post('/customers', [MasterCustomerController::class, 'store']);
