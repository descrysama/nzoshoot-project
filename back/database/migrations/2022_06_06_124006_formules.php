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
            $table->string('plan_price')->nullable(); // Prix de la formule
            $table->mediumText('plan_attribute')->nullable(); // Description sous forme de liste en format JSON
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
