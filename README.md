# Acknowledgements

Hello and thank you for this opportunity. This is my TOCA Player Portal technical assignment. Let me know if you have any questions or encounter any issues in running the webapp.
# TOCA Player Portal

This is a web application for TOCA players to log in and view their training history, upcoming scheduled sessions, and relevant information on their profile.

## Tech Stack

- **Frontend:** React, TypeScript, Vite, React Router
- **Backend:** Node.js, Express, TypeScript

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm

### Installation

1. Clone the repository, or download ZIP from GitHub
    ```
    git clone <your-repo-url>
    ```

2. Install frontend dependencies
    ```
   cd client
   npm install
    ```

3. Install backend dependencies
    ```
   cd ..
   cd server
   npm install
    ```

### Running the App

1. Start the backend server from terminal
    ```
   cd server
   npm run dev
    ```

2. Start the frontend by splitting the terminal

    This can be done using Ctrl+Shift+5 or, if running in VS Code, by selecting the Terminal header and clicking "Split Terminal"
    ```
   cd client
   npm run dev
    ```

3. Open your browser at `http://localhost:5173`

4. Terminate Program
    You can close the front end by typing q or to stop the front end by pressing Ctrl+C in their respective terminals.

## Test Accounts
The three test accounts provided in the profiles.json files are as follows.
| Email | 
|-------|
| sabrina.williams@example.com |
| morgan.johnson@example.com |
| alex.jones@example.com |

## Features

- Player sign in via email lookup
- View upcoming training appointments
- Browse past training sessions and stats
- Session detail view with full metrics
- Player profile page
- About TOCA page

## Project Structure
```
toca_technical/
├── client/          # React frontend
│   └── src/
│       ├── components/
│       └── pages/   # React files for each page
└── server/          # Express backend
    └── src/
        ├── data/    # JSON data files
        └── index.ts # Server definition
```