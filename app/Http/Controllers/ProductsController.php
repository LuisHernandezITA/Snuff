<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductsController extends Controller
{
    public function index()
    {
        $products = DB::table('products')->get();
        return $products;
    }

    public function newest()
{
    $products = DB::table('products')
    ->orderBy('id', 'desc') // Ordenar por el campo 'id' en orden descendente.
    ->take(6) // Limitar los resultados a los últimos 6 registros.
    ->get();

    return $products;
}

    public function show(Request $request)
    {
        $product = Products::where('id', $request->id) -> get();

        if ($product) {
            return $product;
        } else {
            return response()->json(['message' => 'Producto no encontrado'], 404);
        }
    }
}
