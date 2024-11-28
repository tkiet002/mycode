import React from 'react'

export default function Add() {
  return (
    <div class="container mx-auto p-6 bg-white rounded shadow-md">
        <h1 class="text-2xl font-bold text-center mb-6">Add a New Movie</h1>
        <form id="addMovieForm">
            <label for="title" class="block text-gray-700">Title:</label>
            <input type="text" id="title" name="title" required class="mt-1 p-2 border border-gray-300 rounded w-full" />

            <label for="director" class="block text-gray-700 mt-4">Director:</label>
            <input type="text" id="director" name="director" required class="mt-1 p-2 border border-gray-300 rounded w-full" />

            <label for="releaseYear" class="block text-gray-700 mt-4">Release Year:</label>
            <input type="number" id="releaseYear" name="releaseYear" min="1888" max="2100" required class="mt-1 p-2 border border-gray-300 rounded w-full" />

            <label for="genre" class="block text-gray-700 mt-4">Genre:</label>
            <input type="text" id="genre" name="genre" required class="mt-1 p-2 border border-gray-300 rounded w-full" />

            <label for="description" class="block text-gray-700 mt-4">Description:</label>
            <textarea id="description" name="description" rows="4" required class="mt-1 p-2 border border-gray-300 rounded w-full"></textarea>

            <label for="rating" class="block text-gray-700 mt-4">Rating:</label>
            <input type="number" id="rating" name="rating" min="0" max="10" step="0.1" required class="mt-1 p-2 border border-gray-300 rounded w-full" />

            <button type="submit" class="mt-6 w-full bg-green-500 text-white font-bold py-2 rounded hover:bg-green-600">Add Movie</button>
        </form>
    </div>
  )
}
