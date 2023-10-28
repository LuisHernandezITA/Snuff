<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product_Sizes;

class ProductSizesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $product_sizes = new Product_Sizes();
        $product_sizes->product_id = "1";
        $product_sizes->size_id = "2";
        $product_sizes->save();

        $product_sizes = new Product_Sizes();
        $product_sizes->product_id = "1";
        $product_sizes->size_id = "3";
        $product_sizes->save();

        $product_sizes = new Product_Sizes();
    }
}
