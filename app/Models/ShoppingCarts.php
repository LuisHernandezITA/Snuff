<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShoppingCarts extends Model
{
    public $table = 'shopping_carts';
    public $timestamps = false;

    protected $fillable = [
        'user_id',
        'total_amount',
    ];

    use HasFactory;
}
