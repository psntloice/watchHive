<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Actor extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'description'
    ];
    public function shows() {
        return $this->belongsToMany(Show::class, 'actor_show', 'actor_id', 'show_id');
    }
}
