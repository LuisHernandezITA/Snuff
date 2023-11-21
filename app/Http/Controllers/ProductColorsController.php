<?php

namespace App\Http\Controllers;

use App\Models\Color;
use App\Models\ProductColors;
use Illuminate\Http\Request;
use App\Models\Products;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;


class ProductColorsController extends Controller
    {

    public function getProductColors(Request $request) {
        $colorIds = ProductColors::where('product_id', $request->id)->pluck('color_id');
    
        if ($colorIds->isNotEmpty()) {
            $names = Color::whereIn('id', $colorIds)->pluck('name');
    
            return $names;
        } else {
            return response()->json(['message' => 'No se encontraron colores para el producto especificado.'], 404);
        }
    }

    public function store(Request $request)
{
    try {
        $product_id = $request->product_id;
        $color_ids = $request->color_ids;

        if (!is_array($color_ids)) {
            return response()->json(['error' => 'Invalid color_ids format. Array expected.'], 400);
        }

        foreach ($color_ids as $color_id) {
            ProductColors::create([
                'product_id' => $product_id,
                'color_id' => $color_id,
            ]);
        }

        return response()->json(['message' => 'Product colors added successfully.'], 200);
    } catch (\Exception $e) {
        // REGISTER COLOR FOR DEPURATION
        \Log::error($e);

        return response()->json(['error' => 'Internal server error.'], 500);
    }
}

public function destroy($productId)
{
   
    ProductColors::where('product_id', $productId)->delete();

    return response()->json(['message' => 'Registros eliminados correctamente'], 200);
}

        

}
