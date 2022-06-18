<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Params;

class WebParamsController extends Controller
{
    public function index()
    {
        $params = Params::all();
        return response()->json([
            'params' => $params
        ]);
    }

    public function update(Request $request)
    {
        $user = User::where('session_token', $request->session_token)->first();
        if ($user) {
            $validator = Validator::make($request->all(), [
                'slogan' => 'max:255',
                'about_me' => 'max:255',
                'phone_number' => 'max:255',
                'email' => 'email'
            ]);
    
            if ($validator->fails()) {
                return response()->json([
                    'status' => false
                ]);
            } else {
                $params = Params::find(1);
                $params->slogan = $request->slogan;
                $params->about_me = $request->about_me;
                $params->phone_number = $request->phone_number;
                $params->email = $request->email;
                $params->save();
            }
        }
    }
}
