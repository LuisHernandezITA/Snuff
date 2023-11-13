<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;

    public $table = 'products';
    public $timestamps = false;

    protected $fillable = [
        'name',
        'description',
        'category_id',
        'price',
        'available_stock',
        'images',
        'addition_date',
        'available',
    ];

    public function shoppingCart()
    {
        return $this->hasMany(ShoppingCart::class, 'product_id');
    }

    // Define las relaciones con las tablas Category, Size y Color aquí

    // Otras propiedades y relaciones aquí
}
