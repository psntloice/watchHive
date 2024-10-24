<?php

namespace App\Http\Controllers;

use App\Models\Favourites;
use Illuminate\Http\Request;

class FavouritesController extends Controller
{
    //
    public function index()
    {
       
        return Favourites::with(['show.author',  'show.genres', 'user'])->get();
    }

    public function show($id)
    {
        return Favourites::findOrFail($id);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'show_id' => 'required|exists:shows,id',
        ]);

        $favourite = Favourites::create($validatedData); // Create a new favourite record
        return response()->json($favourite, 201);
    }

    public function update(Request $request, $id)
    {
        // $genre = Favourites::findOrFail($id);
        // $genre->update($request->all());
        // return $genre;
    }

    public function destroy($id)
    {
        // Favourites::destroy($id);
        return  Favourites::where('show_id', $id)->delete();

        return response()->noContent();
    }
}
