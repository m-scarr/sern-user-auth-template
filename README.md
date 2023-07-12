# SERN User Authentication Template

I created this template to help rebuild old projects with cleaner code. It utilizes the MVC design pattern and MySQL, Express, React, Node.js in the stack. You can register a user, log in, and log out. It handles sessions with cookies and encrypts passwords with bcrypt. Adding a controller or a function to a controller will automatically add a route, observe the pattern in controllers/User.js to understand how to implement controllers on the back end. Files added to the models folder are similarily automatically added as tables to the database if they don't already exists, you can observe the pattern for models in models/User.js.

# Installation

1. Run npm install
2. Create a database
3. Open config/database.json and change
   ##### `"database":""`
   to
   ##### `"database":"[your database name here]"`

## Available Scripts

In the project directory, you can run:

### `nodemon index`

Runs the back-end of the project on port 3001.

### `npm start`

Runs the front-end in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.
