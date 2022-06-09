<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Contact;
use App\Models\User;


class ContactController extends Controller
{
    public function index($token)
    {
        $user = User::where('session_token', $token)->first();
        if ($user) {
            return response()->json(Contact::all());
        } else {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name' => 'max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|max:1000',
            'phone_number' => 'max:24'
        ]);
        

        if($validator->fails()) {
            return response()->json([
                'status' => false
            ]);
        } else {
            $contact = new Contact();
            $contact->name = $request->name;
            $contact->email = $request->email;
            $contact->phone_number = $request->phone_number;
            $contact->message = $request->message;
            $contact->save();

            return response()->json([
                'status' => true
            ], 201);
        }
    }
}
