<?php

namespace App\Http\Controllers;

use App\Models\Show;
use Illuminate\Http\Request;
use App\Http\Controllers\Exception;
use Illuminate\Support\Facades\Log;
use function Laravel\Prompts\error;

class ShowController extends Controller
{
    public function index()
    {
        
        // $movies = Show::all();

        // // Loop through each movie to append the image URL
        // foreach ($movies as $movie) {
        //     $movie->picture_url = asset('storage/app/public/images' . $movie->image); // Assuming `image` stores the file name
        //     // $movie->picture_url = asset('storage/app/public/images/8CuSte4K3VFBgP3ZN3Ufxc0gccjbjWbVjbAkIbWi.jpg');
        // }
        
        // return response()->json($movies);
    // return Show::all();
    // error(Show::with('genre')->get());
    $movies = Show::with('genre')->get();
    
    // Log the movies for debugging (optional)
    Log::info($movies);

    // Make sure to return the response
    return Show::with(['genre', 'actors', 'author'])->get();

    return response()->json($movies);

    }

    public function show($id)
    {
        return Show::findOrFail($id);
    }

    public function store(Request $request)
    {
           
        try {
            // Step 1: Validate the request
            $validatedData = $request->validate([
                'title' => 'required|string|max:255',
                'type' => 'required|string',
'genre_id' => 'required|array', // Accept an array of genre IDs
// 'genre_id.*' => 'exists:genres,id',
                // 'actor_id' => 'nullable|array', // Allow an array of actor IDs
                // 'actor_id.*' => 'exists:actors,id',                 
                // 'actor_id' => 'required|exists:actors,id',
                'author_id' => 'required|exists:authors,id',
                'first_release_date' => 'nullable|date',
                'next_release_date' => 'nullable|date',
                'sequel_id' => 'nullable|exists:shows,id',
                // 'has_sequel' => 'boolean',
                // 'is_upcoming' => 'boolean',
                // 'picture_url' => 'image|max:2048'
            ]);
    
            // // Step 2: Handle the image upload
            // if ($request->hasFile('picture_url')) {
            //     $image = $request->file('picture_url');
            //     $imageName = time() . '.' . $image->getClientOriginalExtension();
            //     $imagePath = $image->storeAs('public/images', $imageName);
                
            //     if ($imagePath) {
            //         // Image uploaded successfully
            //         $pictureUrl = 'images/' . $imageName;
            //         error_log("Image uploaded successfully: " . $pictureUrl);
                    
            //         // Add the image path to the validated data
            //         $validatedData['picture_url'] = $pictureUrl;
            //     } else {
            //         // Failed to upload the image
            //         error_log("Failed to upload the image.");
            //         return response()->json(['error' => 'Image upload failed.'], 500);
            //     }
            // } else {
            //     // No image uploaded
            //     error_log("No image uploaded in the request.");
            //     return response()->json(['error' => 'No image uploaded.'], 400);
            // }
            $show = Show::create([
                'title' => $validatedData['title'],
                'type' => $validatedData['type'],
                'genre_id' => $validatedData['genre_id'],
                'author_id' => $validatedData['author_id'],
                // 'picture_url' => $validatedData['picture_url'],
               
                'has_sequel' => $validatedData['has_sequel'] ?? false,
                'is_upcoming' => $validatedData['is_upcoming'] ?? false,
            ]);
        // Attach actors to the show using the pivot table
        // $show->actors()->attach($validatedData['actor_id']);
            // Step 3: Create a new Show record using the validated data
            // $show = Show::create($validatedData);
    
            if ($show) {
                // Successfully created the Show
                error_log("Successfully created the Show: " . json_encode($show));
                return response()->json($show, 201);
            } else {
                // Failed to create the Show
                error_log("Failed to create the Show.");
                return response()->json(['error' => 'Failed to create the Show.'], 500);
            }
        } catch (\Exception $e) {
            // Catch any unexpected exceptions
            error_log("Exception occurred: " . $e->getMessage());
            return response()->json(['error' => 'An error occurred: ' . $e->getMessage()], 500);
        }
      
        // $image = $request->file('picture_url');
        // $imageName = time() . '.' . $image->getClientOriginalExtension();
        // $image->storeAs('public/images', $imageName);
        // // // $request->file('picture_url')->store('images', 'public'); 
   
        //  return Show::create(['title' => $request->title,
        //     'type' => $request->type,
        //     'genre_id' => $request->genre_id,
        //     'actor_id' => $request->actor_id,
        //     'author_id' => $request->author_id,
           
        //     'picture_url' =>'images/' . $imageName]);
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
// php artisan storage:link

//    INFO  The [E:\watchHive\myapp\public\storage] link has been connected to [E:\watchHive\myapp\storage\app/public].  