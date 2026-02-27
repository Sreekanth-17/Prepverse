# Prepverse

## Introduction

Prepverse is a web application designed to assist users in preparing for competitive exams. The platform offers a range of resources including quizzes, notes, and progress tracking features. Users can register, log in, access educational content, and monitor their preparation journey through an interactive user interface.

## Features

- User authentication with registration and login.
- Quiz management with multiple categories and questions.
- Notes and resources for exam preparation.
- Progress tracking and visualization for users.
- Administrative dashboard for content management.
- Responsive front-end for seamless user experience.
- RESTful API endpoints for data interaction.

## Requirements

- Node.js (>= 14.x)
- NPM or Yarn
- MongoDB database
- Modern web browser

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Sreekanth-17/Prepverse.git
    cd Prepverse
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    - Create a `.env` file in the root directory.
    - Add MongoDB connection string and any required keys.

4. Start the server:

    ```bash
    npm start
    ```

5. Access the application on `http://localhost:3000`.

## Usage

- Register for a new account or log in if you already have one.
- Navigate through different sections such as quizzes, notes, and progress tracker.
- Take quizzes by selecting a category and answering questions.
- View notes and study materials relevant to your exam preparation.
- Track your progress on the dashboard.
- Administrators can manage content via the admin interface.

## Configuration

- Configure database connection in the `.env` file with your MongoDB URI.
- Adjust other environment variables as needed for JWT secret, session handling, or API keys.
- Admin users can be set up directly in the database if not available through the UI.
- Quiz categories and questions can be managed via admin dashboard or through the backend.

---

This documentation provides a comprehensive overview of the Prepverse repository, outlining its main features, setup steps, and configuration details.
