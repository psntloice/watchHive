<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class AuthorController extends Controller
{
    public function index()
    {
        return Author::all();
    }

    public function show($id)
    {
        return Author::findOrFail($id);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
        ]);
        Log::info('This is an informational message.');
        return Author::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $author = Author::findOrFail($id);
        $author->update($request->all());
        return $author;
    }

    public function destroy($id)
    {
        Author::destroy($id);
        return response()->noContent();
    }
}

