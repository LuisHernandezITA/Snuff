<?php

namespace App\Http\Controllers;

use App\Models\Color;
use App\Models\ProductColors;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductColorsController extends Controller
    {

        public function index()
    {
        $product_colors = DB::table('product_colors')->get();
        return $product_colors;
    }

    public function getProductColors(Request $request) {
        $color_Id = ProductColors::where('product_id', $request->id)->pluck('color_id');
    
        if ($color_Id->isNotEmpty()) {
            return $color_Id;
        } else {
            return response()->json(['message' => 'No se encontraron colores para el producto especificado.'], 404);
        }
    }

    public function getColorsByIds(Request $request) {
        $name = Color::where('id', $request->id) ->pluck('name');

        if ($name) {
            return $name;
        } else {
            return response()->json(['message' => 'Colorcito no encontrado'], 404);
        }
    }
        

}

