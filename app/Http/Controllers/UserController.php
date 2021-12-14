<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function test(User $user)
    {
        $name = $user->hello();
    }
}
