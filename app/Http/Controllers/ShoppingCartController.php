<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ShoppingCart; 
use Illuminate\Support\Facades\Auth;

class ShoppingCartController extends Controller
{
    public function addToCart($user_id, Request $request)
{
    $shoppingCart = ShoppingCart::create([
        'user_id' => $user_id,
        'product_id' => $request->product_id,
    ]);

    return $shoppingCart;
}

public function removeFromCart(Request $request)
{
    $user_id = Auth::id(); // Obtén el ID del usuario autenticado

    $shoppingCart = ShoppingCart::where('user_id', $user_id)
        ->where('product_id', $request->product_id)
        ->delete();

    return response()->json(['message' => 'Producto eliminado del carrito con éxito']);
}
}
