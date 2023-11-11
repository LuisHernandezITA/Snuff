<?php

namespace App\Http\Controllers;

use App\Models\Color;
use App\Models\ProductColors;
use Illuminate\Http\Request;

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
        

}
