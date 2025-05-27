<?php

namespace Database\Seeders;

use App\Models\Pet;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create 15 pets with realistic data
        Pet::factory()->create([
            'name' => 'Fluffy',
            'species' => 'Cat',
            'birth_date' => '2020-03-15',
            'death_date' => null,
            'note' => 'A beautiful Persian cat with long white fur. Loves to sleep in sunny spots and play with feather toys.',
        ]);

        Pet::factory()->create([
            'name' => 'Buddy',
            'species' => 'Dog',
            'birth_date' => '2018-07-22',
            'death_date' => null,
            'note' => 'Golden Retriever who loves fetch and swimming. Very friendly with children and other pets.',
        ]);

        Pet::factory()->create([
            'name' => 'Charlie',
            'species' => 'Hamster',
            'birth_date' => '2023-11-08',
            'death_date' => '2024-12-10',
            'note' => 'A tiny Syrian hamster who loved running on his wheel at night. Always stored food in his cheeks.',
        ]);

        Pet::factory()->create([
            'name' => 'Bella',
            'species' => 'Rabbit',
            'birth_date' => '2022-05-12',
            'death_date' => null,
            'note' => 'Holland Lop rabbit with floppy ears. Enjoys fresh vegetables and hopping around the garden.',
        ]);

        Pet::factory()->create([
            'name' => 'Oscar',
            'species' => 'Fish',
            'birth_date' => '2024-02-28',
            'death_date' => null,
            'note' => 'Colorful Betta fish in a 10-gallon tank. Has a beautiful blue and red coloration.',
        ]);

        Pet::factory()->create([
            'name' => 'Max',
            'species' => 'Dog',
            'birth_date' => '2015-09-03',
            'death_date' => '2024-08-15',
            'note' => 'Loyal German Shepherd who was the best guard dog. Lived a full life of 9 years protecting our family.',
        ]);

        Pet::factory()->create([
            'name' => 'Luna',
            'species' => 'Cat',
            'birth_date' => '2021-12-01',
            'death_date' => null,
            'note' => 'Black cat with green eyes. Very independent but loves cuddles in the evening.',
        ]);

        Pet::factory()->create([
            'name' => 'Tweety',
            'species' => 'Bird',
            'birth_date' => '2019-04-18',
            'death_date' => null,
            'note' => 'Yellow canary with a beautiful singing voice. Brightens up the morning with cheerful songs.',
        ]);

        Pet::factory()->create([
            'name' => 'Rocky',
            'species' => 'Turtle',
            'birth_date' => '2017-06-25',
            'death_date' => null,
            'note' => 'Red-eared slider turtle. Loves basking under the heat lamp and eating lettuce.',
        ]);

        Pet::factory()->create([
            'name' => 'Whiskers',
            'species' => 'Cat',
            'birth_date' => '2016-10-14',
            'death_date' => '2023-11-22',
            'note' => 'Orange tabby cat who lived to be 7 years old. Was known for his playful nature and love for catnip.',
        ]);

        Pet::factory()->create([
            'name' => 'Daisy',
            'species' => 'Guinea Pig',
            'birth_date' => '2023-01-20',
            'death_date' => null,
            'note' => 'Adorable guinea pig with brown and white patches. Makes cute squeaking sounds when excited.',
        ]);

        Pet::factory()->create([
            'name' => 'Spike',
            'species' => 'Hedgehog',
            'birth_date' => '2022-08-07',
            'death_date' => null,
            'note' => 'African pygmy hedgehog who is active at night. Loves mealworms and exploring his cage.',
        ]);

        Pet::factory()->create([
            'name' => 'Shadow',
            'species' => 'Dog',
            'birth_date' => '2019-11-30',
            'death_date' => null,
            'note' => 'Border Collie mix with incredible intelligence. Knows over 20 tricks and loves agility training.',
        ]);

        Pet::factory()->create([
            'name' => 'Mittens',
            'species' => 'Cat',
            'birth_date' => '2024-01-10',
            'death_date' => null,
            'note' => 'Kitten with white paws that look like mittens. Very playful and curious about everything.',
        ]);

        Pet::factory()->create([
            'name' => 'Goldie',
            'species' => 'Fish',
            'birth_date' => '2023-09-12',
            'death_date' => '2024-06-03',
            'note' => 'Beautiful goldfish who lived in a bowl on the kitchen counter. Brought joy to meal times.',
        ]);
    }
}