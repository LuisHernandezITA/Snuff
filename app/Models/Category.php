<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public $table = 'category';
    public $timestamps = false;

    protected $fillable = ['name', 'description'];

    // Relación con los productos
    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
