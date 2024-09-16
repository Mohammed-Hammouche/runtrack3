<?php

// Function to create directory if it doesn't exist
function createDir($path) {
    if (!file_exists($path)) {
        mkdir($path, 0777, true);
        echo "Created directory: $path\n";
    }
}

// Function to create file with content
function createFile($path, $content = '') {
    file_put_contents($path, $content);
    echo "Created file: $path\n";
}

// Set up main directory structure
$baseDir = 'runtrackJs';
createDir($baseDir);
chdir($baseDir);

createDir('bigjob');
chdir('bigjob');

// Create required folders
createDir('styles');
createDir('js');
createDir('assets');

// Create placeholder files
createFile('index.html', '<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>La Plateforme_ Attendance System</title>
    <link rel="stylesheet" href="styles/main.css">
</head>
<body>
    <h1>La Plateforme_ Attendance System</h1>
    
    <script src="js/script.js"></script>
</body>
</html>');

createFile('styles/main.css');
createFile('js/script.js');
createFile('assets/data.json');

// Create README.md
createFile('README.md', '# runtrackJs - BigJob

This project is a web application for La Plateforme_ to anticipate the number of students present in its premises.

## Features

- User registration and login system
- Calendar for requesting attendance authorization
- Moderator backoffice for managing attendance requests
- Administrator rights management
- Responsive design for all device types

## Project Structure

- `styles/`: CSS files
- `js/`: JavaScript files
- `assets/`: Images, fonts, and other assets
- `data.json`: JSON file for data management

## Framework

This project uses [Bootstrap/Materialize] for styling and components.

## Setup

[Instructions for setting up and running the project]

## Contributing

[Guidelines for contributing to the project]

## License

[License information]');

echo "Project structure created successfully!\n";