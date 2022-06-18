<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Contact;
use App\Models\User;
use App\Mail\ResetPassword;
use App\Models\Params;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;

class ContactController extends Controller
{
    public function index($token)
    {
        $user = User::where('session_token', $token)->first();
        if ($user) {
            $contacts = Contact::all();
            return response()->json($contacts);
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
                'status' => false,
                'text' => 'Erreur : Veuillez verifier les champs'
            ]);
        } else {
            $contact = new Contact();
            $admin_email = Params::find(1)->email;
            $contact->name = $request->name;
            $contact->email = $request->email;
            $contact->phone_number = $request->phone_number;
            $contact->message = $request->message;
            Mail::to($admin_email)->send(new ContactMail($contact));
            $contact->save();

            return response()->json([
                'status' => true,
                'text' => 'Formulaire envoyé avec succès'
            ], 201);
        }
    }

    public function destroy(Request $request)
    {
        $user = User::where('session_token', $request->session_token)->first();
        $contact = Contact::find($request->contact_id);
        if ($user) {
            $contact->delete();
        }
    }
}
