<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Formule;
use Illuminate\Http\Request;

class FormuleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $formules = Formule::all();
        return response()->json($formules);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Formule  $formule
     * @return \Illuminate\Http\Response
     */
    public function show(Formule $formule)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Formule  $formule
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Formule $formule)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Formule  $formule
     * @return \Illuminate\Http\Response
     */
    public function destroy(Formule $formule)
    {
        //
    }
}
