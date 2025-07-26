# 🐾 Pet Catalogue – Laravel Project

A simple Laravel web application to catalogue your pets, track their details, and remember those who’ve passed. Built with Blade templates and Laravel 12.

---

## 📋 Features

- 🏠 **Main Page**: Static intro with dynamic counters for living and deceased pets.
- 🐕 **Pets Page**: List all pets with details (name, species, birth/death dates, notes).
- ➕ **Add New Pet**: Add a pet via a form.
- ✏️ **Edit Pet**: Edit existing pet records.
- 👤 **About Page**: Static author info (name, Neptun code, email).
- 🧭 **Navigation Bar**: Brand + links to Pets and About pages.

---

## 🛠 Setup Instructions

### Prerequisites
- PHP >= 8.2
- Composer
- Node.js & NPM
- SQLite (or MySQL if modified)

### Install & Run
```bash
git clone https://github.com/muhammademan/pet-catalogue.git
cd pet-catalogue

composer install
npm install
npm run dev

# Create SQLite file
touch database/database.sqlite

# Configure environment
cp .env.example .env
php artisan key:generate

# Update DB config in .env
DB_CONNECTION=sqlite
DB_DATABASE=${PWD}/database/database.sqlite

# Migrate & seed
php artisan migrate --seed

# Run the app
php artisan serve
