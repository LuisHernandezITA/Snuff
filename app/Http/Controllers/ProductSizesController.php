<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\ProductSizes;
use App\Models\Products;
use App\Models\Size;


class ProductSizesController extends Controller
{
    public function getProductSizes(Request $request) {
        $sizeIds = ProductSizes::where('product_id', $request->id)->pluck('size_id');
    
        if ($sizeIds->isNotEmpty()) {
            $names = Size::whereIn('id', $sizeIds)->pluck('name');
    
            return $names;
        } else {
            return response()->json(['message' => 'Theres no sizes available for the specified product'], 404);
        }
    }

    public function store(Request $request)
    {
        try {
            $product_id = $request->product_id;
            $size_ids = $request->size_ids;
    
            if (!is_array($size_ids)) {
                return response()->json(['error' => 'Invalid size_ids format. Array expected.'], 400);
            }
    
            foreach ($size_ids as $size_id) {
                ProductSizes::create([
                    'product_id' => $product_id,
                    'size_id' => $size_id,
                ]);
            }
    
            return response()->json(['message' => 'Product sizes added successfully.'], 200);
        } catch (\Exception $e) {
            \Log::error($e);
    
            return response()->json(['error' => 'Internal server error.'], 500);
        }
    }

    public function destroy($productId)
{
    
    ProductSizes::where('product_id', $productId)->delete();

    return response()->json(['message' => 'Registros eliminados correctamente'], 200);
}


}


