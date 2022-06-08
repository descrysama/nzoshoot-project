<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false
            ]);
        } else {
            $user = User::where('email', $request->email)->first();
            $session_token = str::random(40);
            if ($user) {
                if (Hash::check($request->password, $user->password)) {
                    $user->session_token = $session_token;
                    $user->save();
                    return response()->json([
                        'status' => true,
                        'user' => $user
                    ]);
                } else {
                    return response()->json([
                        'status' => false
                    ]);
                }
            } else {
                return response()->json([
                    'status' => false
                ]);
            }
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'email' => 'required|email|max:128|unique:users',
            'password' => 'required|min:6'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false
            ]);
        } else {
            $user = new User();
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            $user->save();

            return response()->json([
                'status' => true
            ], 201);
        }

        
    }

    public function checkauth(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'session_token' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Token is missing'
            ]);
        } else {
            $user = User::where('session_token', $request->session_token)->first();
            if ($user) {
                return response()->json([
                    'status' => true,
                    'message' => $user
                ]);
            } else {
                return response()->json([
                    'status' => false,
                    'message' => 'token invalid'
                ]);
            }
        }
    }
}
