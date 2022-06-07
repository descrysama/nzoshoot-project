<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Contact;


class ContactController extends Controller
{
    public function index()
    {
        return Contact::all();
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name' => 'max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|max:800',
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
