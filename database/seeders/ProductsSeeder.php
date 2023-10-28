<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Products;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = new Products();
        $products->name = "Snuff T-Logo";
        $products->description = "T-Shirt made with cotton";
        $products->category_id = "1";
        $products->price = "100";
        $products->available_stock = "100";
        $products->images = "Snuff_tlogo.jpg";
        $products->addition_date = '2023-10-12';
        $products->available = True;
        $products->save();

        $products = new Products();
    }
}
