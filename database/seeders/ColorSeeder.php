<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Color;

class ColorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $color = new Color();
        $color->name = "Dark";
        $color->save();
        
        $color = new Color();
        $color->name = "Light";
        $color->save();
        
        $color = new Color();
        $color->name = "Yellow";
        $color->save();

        $color = new Color();
        $color->name = "Brown";
        $color->save();

        $color = new Color();
        $color->name = "Green";
        $color->save();

        $color = new Color();
    }
}
