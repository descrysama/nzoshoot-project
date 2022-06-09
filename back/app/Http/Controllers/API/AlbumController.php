<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Album;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\File;

class AlbumController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $albums = Album::all();
        return response()->json($albums);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = User::where('session_token', $request->token)->first();

        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'place' => 'required|max:255',
            'cover_path' => 'required|image|mimes:jpeg,png,jpg,svg'
        ]);
        if ($user && $validator->passes()) {
            $album = new Album();
            $album->name = $request->name;
            $request->file("cover_path")->store('public/documents/covers/');
            $album->cover_path = $request->cover_path;
            $album->place = $request->place;
            $album->save();
            return response()->json($album);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Album  $album
     * @return \Illuminate\Http\Response
     */
    public function show(Album $album)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Album  $album
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Album $album)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Album  $album
     * @return \Illuminate\Http\Response
     */
    public function destroy($albumid, Request $request)
    {
        $user = User::where('session_token', $request->session_token)->first();
        
        if($user) {
            $album = Album::where('id', $albumid)->first();
            $album->delete();
            return response()->json(['status' => true]);
        } else {
            return response()->json(['status' => false]);
        }
    }
}
