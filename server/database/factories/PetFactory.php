<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Carbon\Carbon;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pet>
 */
class PetFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $species = ['Cat', 'Dog', 'Bird', 'Fish', 'Rabbit', 'Hamster', 'Guinea Pig', 'Turtle', 'Hedgehog'];
        $selectedSpecies = $this->faker->randomElement($species);
        
        // Pet names based on species
        $petNames = [
            'Cat' => ['Fluffy', 'Whiskers', 'Luna', 'Shadow', 'Mittens', 'Smokey', 'Tiger', 'Princess'],
            'Dog' => ['Buddy', 'Max', 'Shadow', 'Bailey', 'Rocky', 'Charlie', 'Lucy', 'Daisy'],
            'Bird' => ['Tweety', 'Sunny', 'Charlie', 'Kiwi', 'Mango', 'Blue', 'Rio', 'Phoenix'],
            'Fish' => ['Oscar', 'Goldie', 'Nemo', 'Bubbles', 'Finn', 'Splash', 'Azure', 'Coral'],
            'Rabbit' => ['Bella', 'Bunny', 'Cottontail', 'Snowball', 'Pepper', 'Cocoa', 'Hazel', 'Clover'],
            'Hamster' => ['Charlie', 'Peanut', 'Nibbles', 'Squeaky', 'Tiny', 'Oreo', 'Buttercup', 'Gizmo'],
            'Guinea Pig' => ['Daisy', 'Pickles', 'Popcorn', 'Cuddles', 'Patches', 'Marshmallow', 'Pepper', 'Clover'],
            'Turtle' => ['Rocky', 'Shelly', 'Speedy', 'Yertle', 'Leonardo', 'Donatello', 'Raphael', 'Michelangelo'],
            'Hedgehog' => ['Spike', 'Quill', 'Prickles', 'Sonic', 'Hazel', 'Rosie', 'Needle', 'Pinky']
        ];

        $birthDate = $this->faker->dateTimeBetween('-10 years', '-1 month');
        
        // 80% chance of being alive, 20% chance of having passed away
        $isAlive = $this->faker->boolean(80);
        $deathDate = null;
        
        if (!$isAlive) {
            // If not alive, death date should be after birth date but before today
            $deathDate = $this->faker->dateTimeBetween($birthDate, 'now');
        }

        $notes = [
            'A beautiful companion with a gentle personality.',
            'Loves to play and is very energetic.',
            'Very friendly with children and other pets.',
            'Has a calm temperament and enjoys quiet moments.',
            'Playful and curious about everything around.',
            'Loves treats and enjoys being petted.',
            'Independent but affectionate when in the mood.',
            'Always ready for an adventure or a good nap.',
            'Has the most beautiful eyes and soft fur.',
            'Brings joy and happiness to the whole family.',
        ];

        return [
            'name' => $this->faker->randomElement($petNames[$selectedSpecies]),
            'species' => $selectedSpecies,
            'birth_date' => $birthDate,
            'death_date' => $deathDate,
            'note' => $this->faker->randomElement($notes),
        ];
    }
}