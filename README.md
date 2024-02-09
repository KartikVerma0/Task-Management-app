## Task-Management-app
![Screenshot of home page of Task Management Application](https://github.com/KartikVerma0/Task-Management-app/assets/97230777/a58a5682-8609-4eeb-a401-6cda6151db72)


This is a task management application built with Node.js, Express, MongoDB, Mongoose, and EJS. It allows users to register, login, and create their own tasks with prioritized color coding.

### Features

-   **Authentication:** Users can register and login securely.
-   **Task Management:** Create, edit, and delete tasks.
-   **Priority System:** Tasks can be categorized as high (red), medium (yellow), or low (green).
-   **User-Linked Tasks:** Tasks are stored and associated with the user who created them.
-   **Built with:**
    -   Node.js: Powerful JavaScript runtime environment.
    -   Express: Web framework for Node.js.
    -   MongoDB: NoSQL database for flexible data storage.
    -   Mongoose: ODM (Object Data Modeling) for MongoDB in Node.js.
    -   EJS: Templating engine for rendering dynamic HTML.
    -   CSS: Style the application interface.

### Getting Started

1. Clone the repository: `git clone https://github.com/KartikVerma0/Task-Management-app.git`
2. Install dependencies: `npm install`
3. Create a `.env` file in the root directory and add your MongoDB connection string: `MONGO_URL=your_mongo_connection_string` and add a session secret key:
   `SESSION_SECRET=your_session_secret_key`
4. Start the server: `npm start`

### Accessing the application

-   Open http://localhost:3000 in your browser.
-   Register a new user or login if you already have an account.
-   Start managing your tasks!

### Contributing

We welcome contributions to this project!

### Additional Notes

-   Feel free to replace `your_username` with your actual GitHub username in the clone command.
-   Update the placeholder `your_mongo_connection_string` with your actual MongoDB connection string before running the application.
