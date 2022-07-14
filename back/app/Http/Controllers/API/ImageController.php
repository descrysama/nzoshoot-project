<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ImageModel;
use Intervention\Image\Facades\Image;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;

class ImageController extends Controller
{
    
    public function index($album_id)
    {
        $images = ImageModel::where('album_id', $album_id)->get();
        return response()->json($images);
    }

    public function store(Request $request)
    {
        $user = User::where('session_token', $request->session_token)->first();
        if ($user) {
            $validator = Validator::make($request->all( ), [
                'image_path' => 'required|mimes:jpeg,png,jpg,gif,svg,mp4,ogg,mov'
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'status' => false,
                    'text' => 'Erreur, Verifies les champs.',
                    'error' => $validator->errors()
                ]);
            } else {
                $filename = str::random(40). '.'.$request->image_path->getClientOriginalExtension();
                $extension = $request->image_path->getClientOriginalExtension();
                if($extension == 'mp4' || $extension == 'ogg' || $extension == 'mov') {
                    $request->image_path->move(public_path('documents/videos'), $filename);
                    $video = new ImageModel();
                    $video->image_path = '/documents/videos/'. $filename;
                    $video->album_id = $request->album_id;
                    $video->type = 'video';
                    $video->save();
                } else {
                    $resize = Image::make($request->image_path->getRealPath());
                    $resize->resize(3000, 3000, function ($constraint) {
                        $constraint->aspectRatio();
                    });
                    $resize->save(public_path('documents/images/'. $filename));
                    $image = new ImageModel();
                    $image->image_path = '/documents/images/'. $filename;
                    $image->album_id = $request->album_id;
                    $image->type = 'image';
                    $image->save();
                }
                

                
            }
        }
    }

    public function destroy(Request $request)
    {
        $user = User::where('session_token', $request->session_token)->first();
        
        if($user) {
            $image = ImageModel::where('id', $request->image_id)->first();
            File::delete('.'.$image->image_path);
            $image->delete();
            return response()->json(['status' => true]);
        } else {
            return response()->json(['status' => false]);
        }
    }
}
