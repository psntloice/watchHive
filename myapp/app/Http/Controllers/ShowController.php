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
            'actor_id' => 'required|exists:actors,id',
            'author_id' => 'required|exists:authors,id',
            'first_release_date' => 'nullable|date',
            'next_release_date' => 'nullable|date',
            'sequel_id' => 'nullable|exists:shows,id',
            'has_sequel' => 'boolean',
            'is_upcoming' => 'boolean',
        ]);

          // Store the uploaded image locally
          $filePath = $request->file('image')->store('images', 'public'); // Save in storage/app/public/images

          // Create a new movie instance and set its properties
          $movie = new Show();
          $movie->title = $request->title;
          $movie->type = $request->type;
          $movie->genre_id = $request->genre_id;
          $movie->actor_id = $request->actor_id;
          $movie->author_id = $request->author_id;
          $movie->first_release_date = $request->first_release_date;
          $movie->next_release_date = $request->next_release_date;
          $movie->sequel_id = $request->sequel_id;
          $movie->has_sequel = $request->has_sequel;
          $movie->is_upcoming = $request->is_upcoming;
          $movie->image_url = $filePath; // Store the local file path
          $movie->save(); // Save the movie to the database
  
        // return Show::create($request->all());
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
