<?php

namespace App\Http\Controllers;

use App\Models\Show;
use Illuminate\Http\Request;

class ShowController extends Controller
{
    public function index()
    {
        return Show::all();
    }

    public function show($id)
    {
        return Show::findOrFail($id);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'type' => 'required|string',
            'genre_id' => 'required|exists:genres,id',
            'author_id' => 'required|exists:authors,id',
            'first_release_date' => 'nullable|date',
            'next_release_date' => 'nullable|date',
            'sequel_id' => 'nullable|exists:shows,id',
            'has_sequel' => 'boolean',
            'is_upcoming' => 'boolean',
        ]);

        return Show::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $show = Show::findOrFail($id);
        $show->update($request->all());
        return $show;
    }

    public function destroy($id)
    {
        Show::destroy($id);
        return response()->noContent();
    }
}
