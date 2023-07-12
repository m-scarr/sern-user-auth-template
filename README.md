# SERN User Authentication Template

I created this template to help rebuild old projects with cleaner code. You can register a user, log in, and log out. It handles sessions with cookies and encrypts passwords with bcrypt. Adding a controller or a function to a controller will automatically add a route, observe the pattern of the controllers/User.js to understand how to implement controllers on the back end. Models are similarily automatically added to the database if they don't already exists.

## Available Scripts

In the project directory, you can run:

### `nodemon index`

Runs the back-end of the project on port 3000.\

### `npm start`

Runs the front-end in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
