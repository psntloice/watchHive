<?php

namespace App\Http\Controllers;

use App\Models\Watchlist;
use Illuminate\Http\Request;

class WatchlistController extends Controller
{
    public function index()
    {
        return Watchlist::with('show')->get();
    }

    public function show($id)
    {
        return Watchlist::with('show')->findOrFail($id);
    }

    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'show_id' => 'required|exists:shows,id',
        ]);

        return Watchlist::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $watchlist = Watchlist::findOrFail($id);
        $watchlist->update($request->all());
        return $watchlist;
    }

    public function destroy($id)
    {
        Watchlist::destroy($id);
        return response()->noContent();
    }
}
