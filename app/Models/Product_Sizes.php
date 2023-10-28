<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product_Sizes extends Model
{
    public $table = 'product_sizes';
    public $timestamps = false;

    protected $fillable = ['product_id', 'size_id'];
}
