<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Album;
use App\Models\Image;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

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
        $user = User::where('session_token', $request->session_token)->first();
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'place' => 'required|max:255',
            'cover_path' => 'required|image|mimes:jpeg,png,jpg,gif,svg'
        ]);
        if ($user) {
            if ($validator->fails()) {
                return response()->json([
                    'status' => false,
                    'text' => 'Erreur, Verifies les champs.',
                    'error' => $validator->errors()
                ]);
            } else {
                $filename = str::random(40). '.'.$request->cover_path->getClientOriginalExtension();
                $request->cover_path->move('documents/covers/', $filename);

                $album = new Album();
                $album->name = $request->name;
                $album->place = $request->place;
                $album->cover_path = '/documents/covers/'. $filename;
                $album->save();
    
                return response()->json([
                    'status' => true,
                    'text' => 'Album ajouté avec succès.'
                ]);
            }

        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Album  $album
     * @return \Illuminate\Http\Response
     */
    public function show($album_id)
    {
        $album = Album::find($album_id);
        return response()->json($album);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Album  $album
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $user = User::where('session_token', $request->session_token)->first();

        if ($user) {
            $validator = Validator::make($request->all(), [
                'name' => 'max:255',
                'place' => 'max:255',
                'cover_path' => 'mimes:jpeg,png,jpg,gif,svg'
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'status' => false,
                    'text' => 'Erreur, Verifies les champs.',
                    'error' => $validator->errors()
                ]);
            } else {
                $album = Album::find($request->album_id);
                $filename = str::random(40). '.'.$request->cover_path->getClientOriginalExtension();
                $request->cover_path->move('documents/covers/', $filename);
                File::delete('.'.$album->cover_path);
                Album::where('id', $request->album_id)->update([
                    'name' => $request->name,
                    'place' => $request->place,
                    'cover_path' => '/documents/covers/'. $filename
                ]);
                return response()->json([
                    'status' => true,
                    'text' => 'Album modifié avec succès.',
                    'error' => $validator->errors()
                ]);
            }
        }

        return response()->json([
            'infos' => $request->all()
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Album  $album
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $user = User::where('session_token', $request->session_token)->first();
        
        if($user) {
            $album = Album::where('id', $request->album_id)->first();
            $allImages = Image::where('album_id', $request->album_id)->get();
            foreach($allImages as $image) {
                File::delete('.'.$image->image_path);
                $image->delete();
            }
            File::delete('.'.$album->cover_path);
            $album->delete();
            return response()->json(['status' => true]);
        } else {
            return response()->json(['status' => false]);
        }
    }
}
