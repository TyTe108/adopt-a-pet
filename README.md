# Adopt-A-Pet 🐾

## Overview

Adopt-A-Pet is a React-based web application that helps users find pets available for adoption. The application fetches data from an API and displays it in a user-friendly interface.

## Features

- **Search for Pets**: Users can search for pets by type or name.
- **Pet Details**: Clicking on a pet displays more details about the pet, including breed, color, and gender.
- **Navigation**: Easy navigation through different types of pets.
- **Hero Images**: Dynamic hero images based on the type of pet being viewed.

## Tech Stack

- React
- React Router Dom
- Fetch API

## Project Structure

- `src/`: Main source code directory
  - `api/`: API calls and logic
  - `assets/`: Static assets like images
  - `components/`: Reusable React components
    - `hero/`: Hero image component
    - `navigation/`: Navigation bar component
    - `pet/`: Individual pet display component
    - `root/`: Root component wrapping the whole app
    - `search/`: Search bar component
  - `mocks/`: Mock data and handlers
  - `pages/`: Different pages of the app
    - `detail/`: Pet details page
    - `home/`: Home page
    - `petDetailsNotFound/`: 404 page for missing pet details
    - `search/`: Search results page
  - `App.js`: Main application file
  - `index.js`: Entry point of the application

## Installation and Running

1. Clone the repository
2. Run `yarn install` to install dependencies
3. Run `yarn start` to start the development server

Visit [http://localhost:3000](http://localhost:3000) to view the application.

## Contributing

Feel free to open issues and pull requests!
