<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AccessTokens extends Model
{
    use HasFactory;
    public $table = 'oauth_access_tokens';

    // Define las columnas que puedes llenar (si es necesario)
    protected $fillable = [
        'user_id', 'client_id', 'name', 'scopes', 'revoked', 'expires_at',
    ];
}
