<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Image;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;

class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($album_id)
    {
        $images = Image::where('album_id', $album_id)->get();
        return response()->json($images);
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
        if ($user) {
            foreach(array($request->image_path) as $image) {
                $validator = Validator::make($image, [
                    'image_path' => 'required|image|mimes:jpeg,png,jpg,gif,svg'
                ]);
                if ($validator->fails()) {
                    return response()->json([
                        'status' => false,
                        'text' => 'Erreur, Verifies les champs.',
                        'error' => $validator->errors()
                    ]);
                } else {
                    $filename = str::random(40). '.'.$image->getClientOriginalExtension();
                    $image->move('documents/images/', $filename);

                    $image = new Image();
                    $image->image_path = '/documents/images/'. $filename;
                    $image->save();
                }
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function show(Image $image)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Image $image)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $user = User::where('session_token', $request->session_token)->first();
        
        if($user) {
            $image = Image::where('id', $request->image_id)->first();
            File::delete('.'.$image->image_path);
            $image->delete();
            return response()->json(['status' => true]);
        } else {
            return response()->json(['status' => false]);
        }
    }
}
