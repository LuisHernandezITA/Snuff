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
