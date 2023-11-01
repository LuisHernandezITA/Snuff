<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\CartItems;

class CartItemsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $cartitems = new CartItems();
        $cartitems->cart_id = "1";
        $cartitems->product_id = "1";
        $cartitems->quantity = "2";
        $cartitems->save();

        $cartitems = new CartItems();
    }
}
