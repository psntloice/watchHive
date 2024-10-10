<?php

namespace App\Http\Controllers;

use App\Models\Actor;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;


class ActorController extends Controller
{
    public function index()
    {
        return Actor::all();
    }

    public function show($id)
    {
        return Actor::findOrFail($id);

    }

    public function store(Request $request)
    {

        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
        ]);
        Log::info('This is an informational message.');
        return Actor::create($request->all());
        echo(Actor::create($request->all()));
    }

    public function update(Request $request, $id)
    {
        $actor = Actor::findOrFail($id);
        $actor->update($request->all());
        return $actor;
    }

    public function destroy($id)
    {
        Actor::destroy($id);
        return response()->json(['message' => 'deleted successfully']);
    }
}
