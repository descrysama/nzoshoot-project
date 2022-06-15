<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('formules', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // nom de la formule
            $table->mediumText('time')->nullable(); // Temps attribué à la prise de vue
            $table->mediumText('description')->nullable(); // Description de la formule
            $table->mediumText('photos')->nullable(); // Nombre de photos
            $table->string('plan_price'); // Prix de la formule
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
