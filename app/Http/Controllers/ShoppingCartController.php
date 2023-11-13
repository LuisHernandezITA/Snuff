<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ShoppingCart; 
use App\Models\User;
use App\Models\Products;
use Illuminate\Support\Facades\DB;

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

    // Obtén los productos actualizados en el carrito después de eliminar el producto
    $updatedCart = ShoppingCart::where('user_id', $user_id)->get();

    return response()->json(['message' => 'Producto eliminado del carrito con éxito', 'cart' => $updatedCart]);
}
public function getProductsInCart(Request $request)
{
    $user_id = $request->user_id; // Asegúrate de pasar el user_id en la solicitud

    $cartItems = ShoppingCart::where('user_id', $user_id)->get();

    if ($cartItems->isNotEmpty()) {
        $productIds = $cartItems->pluck('product_id');
        $products = Products::whereIn('id', $productIds)->get();

        // Mapea la cantidad de cada producto en el carrito
        $products = $products->map(function ($product) use ($cartItems) {
            $product->quantity = $cartItems->where('product_id', $product->id)->count();
            return $product;
        });

        return $products;
    } else {
        return response()->json(['message' => 'No se encontraron productos en el carrito para el usuario especificado.'], 404);
    }
}

}
