<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('shows', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('type');
        $table->foreignId('genre_id');
        $table->foreignId('author_id');
        $table->foreignId('actor_id');
        $table->string('picture_url')->nullable();
        $table->date('first_release_date')->nullable(); // Add first release date
        $table->date('next_release_date')->nullable(); // Add next release date
        $table->unsignedBigInteger('sequel_id')->nullable(); // Nullable reference to self
        $table->boolean('has_sequel')->default(false);
        $table->boolean('is_upcoming')->default(false);
            $table->timestamps();

            $table->foreign('genre_id')->references('id')->on('genres')->onDelete('cascade');
            $table->foreign('actor_id')->references('id')->on('actors')->onDelete('cascade');
            $table->foreign('author_id')->references('id')->on('authors')->onDelete('cascade');
            $table->foreign('sequel_id')->references('id')->on('shows')->onDelete('set null');            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shows');
    }
};
