<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Show extends Model
{
    use HasFactory;
    protected $fillable = [
        'title', 'type', 'genre_id', 'author_id', 'first_release_date', 'next_release_date', 'sequel_id', 'picture_url', 'is_upcoming', 'has_sequel',
    ];

    public function genre()
    {
        return $this->belongsTo(Genre::class);
    }

    public function author()
    {
        return $this->belongsTo(Author::class);
    }

    public function sequel()
    {
        return $this->belongsTo(Show::class, 'sequel_id');
    }

    public function sequels()
    {
        return $this->hasMany(Show::class, 'sequel_id');
    }    

    public function favourites() {
        return $this->hasMany(Favourites::class);
    }

    public function watchlist() {
        return $this->hasMany(Watchlist::class);
    }

    public function actors() {
        return $this->belongsToMany(Show::class, 'actor_show', 'actor_id', 'show_id');
    }
}
