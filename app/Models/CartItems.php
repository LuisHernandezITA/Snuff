<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CartItems extends Model
{
    public $table = 'cartitems';
    public $timestamps = false;

    protected $fillable = [

        'cart_id',
        'product_id',  
        'quantity',
    ];

    use HasFactory;
}
