<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
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
}
