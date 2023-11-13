<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShoppingCart extends Model
{
    public $table = 'shopping_cart';
    public $timestamps = false;

    protected $fillable = [
        'user_id',
        'product_id',
    ];

    use HasFactory;
}
