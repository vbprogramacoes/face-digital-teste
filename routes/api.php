<?php

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/produtos', 'ProdutoController@all');
Route::get('/produto/{id}', 'ProdutoController@pegarProduto');

Route::get('/carrinho/ip', 'CarrinhoController@obterIP');
Route::get('/carrinho/{id_user}', 'CarrinhoController@pegarCarrinho');
Route::put('/carrinho/{id}', 'CarrinhoController@updateCarrinho');
Route::post('/produto', 'CarrinhoController@addProduto');