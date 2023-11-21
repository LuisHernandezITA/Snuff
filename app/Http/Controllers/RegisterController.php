<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class RegisterController extends ResponseController
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.',
            $validator->errors());
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] = $user->createToken('MyApp')
                            ->accessToken;
        $success['name'] = $user->name;

        return response()->json([
            'success' => true,
            'message' => 'User registered successfully.',
            'user' => $success
        ]);

        /*return $this->sendResponse($success,
            'User register succesfully.');*/
    }

    public function login(Request $request)
{
    $user_id = $request->input('user_id');

    if ($user_id) {
        // Si se proporciona el user_id, buscar al usuario por user_id
        $user = User::find($user_id);

        if ($user) {
            // Autenticar al usuario por su user_id
            Auth::loginUsingId($user->id);

            // Generar un nuevo token de acceso
            $token = $user->createToken('MyApp')->accessToken;

            $success['user_id'] = $user->id;
            $success['token'] = $token;

            return response()->json([
                'success' => true,
                'message' => 'User login successfully.',
                'user' => $success
            ]);
        } else {
            return $this->sendError('Unauthorised.', ['error' => 'User not found']);
        }
    } else {
        // Si no se proporciona user_id, proceder con la lógica de autenticación normal
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            $user = Auth::user();
            $success['token'] = $user->createToken('MyApp')->accessToken;
            $success['name'] = $user->name;
            $success['user_id'] = $user->id;

            return response()->json([
                'success' => true,
                'message' => 'User login successfully.',
                'user' => $success
            ]);
        } else {
            return $this->sendError('Unauthorised.', ['error' => 'Unauthorised']);
        }
    }
}

}
