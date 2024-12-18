<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attendance extends Model
{
    use HasFactory;

    // Define table name if it's different from the default plural form
    protected $table = 'attendances';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    // Define fillable fields
    protected $fillable = ['session_id', 'roll'];
}
