<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

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

    public function store(Request $request)
    {
        $products = Products::create([
            'name' => $request->name,
            'description' => $request->description,
            'category_id' => $request->category_id,
            'price' => $request->price,
            'available_stock' => $request->available_stock,
            'images' => $request->images,
            'addition_date' => Carbon::now(),
            'available' => $request->available
        ]);
    
        $products->save();

        return $products;
    }

    public function update(Request $request, $id)
    {
        $product = Products::find($id);

        if (!$product) {
            return response()->json(['message' => 'Producto no encontrado'], 404);
        }

        $product->name = $request->input('name');
        $product->description = $request->input('description');
        $product->category_id = $request->input('category_id');
        $product->price = $request->input('price');
        $product->available_stock = $request->input('available_stock');
        $product->images = $request->input('images');
        $product->addition_date = $request->input('addition_date');
        $product->available = $request->input('available');

        $product->save();

        return response()->json(['message' => 'Producto actualizado correctamente'], 200);
    }

    public function destroy($id)
    {
        $product = Products::find($id);

        if (!$product) {
            return response()->json(['message' => 'Producto no encontrado'], 404);
        }

        $product->delete();

        return response()->json(['message' => 'Producto eliminado correctamente'], 200);
    }
}
