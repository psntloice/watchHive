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
        $actor = Actor::where('deductionID', $id)->first();
        if (!$actor) {
            return response()->json(['message' => 'not found'], 404);
        }

        return $actor;
    }

    public function store(Request $request)
    {

        try {
            // Validate incoming request
            $validator = Validator::make($request->all(), [
                'payPeriodID' => 'required|string|exists:pay_periods,payPeriodID',
                'employeeID' => 'required|string',
                'deductionType' => 'required|string',
                'amount' => 'required|numeric',
            ]);

            // Check if validation fails
            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 400);
            } else {
                return Actor::create($validator->validated());
            }
        } catch (ValidationException $e) {
            // Log validation errors
            Log::error('Validation Error', ['errors' => $e->errors()]);
            return response()->json(['error' => 'Validation failed', 'errors' => $e->errors()], 422);
        }
    }

    public function update(Request $request, $id)
    {
        $actor = Actor::where('deductionID', $id)->first();
        if (!$actor) {
            return response()->json(['message' => 'not found'], 404);
        }
        $actor->update($request->all());
        return $actor;
    }

    public function destroy($id)
    {
        $actor = Actor::where('deductionID', $id)->first();
        if (!$actor) {
            return response()->json(['message' => 'not found'], 404);
        }
        $actor->delete();

        return response()->json(['message' => 'deleted successfully']);
    }
}
