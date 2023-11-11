<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProductSizes;
use App\Models\Size;


class ProductSizesController extends Controller
{
    public function getProductSizes(Request $request) {
        $sizeIds = ProductSizes::where('product_id', $request->id)->pluck('size_id');
    
        if ($sizeIds->isNotEmpty()) {
            $names = Size::whereIn('id', $sizeIds)->pluck('name');
    
            return $names;
        } else {
            return response()->json(['message' => 'No se encontraron sizes para el producto especificado.'], 404);
        }
    }
}
