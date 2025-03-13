# News Aggregator API

A Node.js-based API built with Express.js that fetches articles from WordPress sites, filters out potentially fake or misleading news, and serves them to a frontend application. This project uses `axios` for HTTP requests, `cors` for cross-origin resource sharing, and a custom `fakeNewsDetector` module to filter content.

## Features
- Fetches articles from multiple WordPress sites using the WP REST API.
- Filters out fake or misleading news using a custom detection function.
- Supports CORS for secure communication with frontend applications (e.g., React apps running on `http://localhost:3001`).
- Configurable via environment variables.

## Prerequisites
Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A basic understanding of WordPress REST API endpoints

## Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/omerrustemicode/News-Aggregator.git
   cd News-Aggregator

## Install dependencies:
    npm install
## Set up environment variables: Create a .env file in the root directory and add the following:
    PORT=3000
Usage
## Start the server:
    npm start
## Dependencies
  express: Web framework for Node.js
  axios: Promise-based HTTP client
  body-parser: Middleware to parse incoming request bodies
  cors: Middleware for enabling CORS
  dotenv: Loads environment variables from a .env file
  ```bash
  npm install express axios body-parser cors dotenv

## Configuration
    WordPress Sites: create domain.json on front of folder and add all wordpress sites [ domain.com, domain1.com ]
    CORS: Adjust the whitelist in the corsOptions object to allow additional origins.
    Port: Set the PORT environment variable in .env to change the default port.
    Contributing
    Fork the repository.
    Create a new branch (git checkout -b feature-branch).
    Make your changes and commit them (git commit -m "Add feature").
    Push to the branch (git push origin feature-branch).
    Open a pull request.
    License
    This project is licensed under the MIT License. See the LICENSE file for details.
    
    Acknowledgments
    Built with ❤️ by Omer Rustemi.
    Thanks to the open-source community for the amazing tools used in this project.
