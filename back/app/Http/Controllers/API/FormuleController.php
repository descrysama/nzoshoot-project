<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Formule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FormuleController extends Controller
{

    public function index()
    {
        $formules = Formule::all();
        return response()->json($formules);
    }

    public function store(Request $request)
    {
        $user = User::where('session_token', $request->session_token)->first();

        if ($user) {
            $validator = Validator::make($request->all(), [
                'name' => 'required|max:255',
                'time' => 'max:255',
                'description' => 'max:255',
                'photos' => 'max:255',
                'plan_price' => 'required|max:255'
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'status' => false,
                    'text' => 'Erreur, Verifies les champs.',
                    'error' => $validator->errors()
                ]);
            } else {
                $formule = Formule::create([
                    'name' => $request->name,
                    'time' => $request->time,
                    'description' => $request->description,
                    'photos' => $request->photos,
                    'plan_price' => $request->plan_price
                ]);
                return response()->json([
                    'status' => true,
                    'text' => 'Formule ajoutée avec succès.',
                    'formule' => $formule
                ]);
            }
        }
    }

    public function update(Request $request)
    {
        $user = User::where('session_token', $request->session_token)->first();

        if ($user) {
            $validator = Validator::make($request->all(), [
                'name' => 'required|max:255',
                'time' => 'max:255',
                'description' => 'max:255',
                'photos' => 'max:255',
                'plan_price' => 'required|max:255'
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'status' => false,
                    'text' => 'Erreur, Verifies les champs.',
                    'error' => $validator->errors()
                ]);
            } else {
                $formule = Formule::where('id', $request->formule_id);
                $formule->update([
                    'name' => $request->name,
                    'time' => $request->time,
                    'description' => $request->description,
                    'photos' => $request->photos,
                    'plan_price' => $request->plan_price
                ]);
                return response()->json([
                    'status' => true,
                    'text' => 'Formule modifiée avec succès.',
                    'formule' => Formule::where('id', $request->formule_id)->first()
                ]);
            }
        }
    }

    public function destroy(Request $request)
    {
        $user = User::where('session_token', $request->session_token)->first();
        
        if($user) {
            $formule = Formule::where('id', $request->tarif_id)->first();
            $formule->delete();
            return response()->json(['status' => true]);
        } else {
            return response()->json(['status' => false]);
        }
    }
}
