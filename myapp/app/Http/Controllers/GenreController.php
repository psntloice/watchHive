<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use Illuminate\Http\Request;

class GenreController extends Controller
{
    public function index()
    {
        return Genre::all();
    }

    public function show($id)
    {
        return Genre::findOrFail($id);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        return Genre::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $genre = Genre::findOrFail($id);
        $genre->update($request->all());
        return $genre;
    }

    public function destroy($id)
    {
        Genre::destroy($id);
        return response()->noContent();
    }
}
