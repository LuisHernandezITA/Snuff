<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ShoppingCarts;

class ShoppingCartsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $shoppingcarts = new ShoppingCarts();
        $shoppingcarts->user_id = "1";
        $shoppingcarts->total_amount = 0;
        $shoppingcarts->save();

        $shoppingcarts = new ShoppingCarts();
    }
}
