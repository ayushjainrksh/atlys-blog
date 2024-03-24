# Atlys blog
Demo: https://atlys-blog.vercel.app

## Setup
1. Clone the repo
2. Run `nvm use` to use the correct node version
3. Run `npm install` to install the dependencies
4. Run `npm start` to start the server
5. Open `http://localhost:3000` in your browser

## Usage
1. `/` - Home page
    
    Shows login form if not logged in and redirects to blogs page if logged in

2. `/login` - Login page
    
    Shows login form

3. `/signup` - Signup page
    
    Shows signup form

4. `/blogs` - Blogs page
    
    Shows all the blogs, when trying to create a post, it redirects to login page if not logged in (displays a login modal over blogs page). When logged in, create post button posts the blog for the user. A user can select categories and add content for the blog.


## Structure
1. `src` - Contains all the source code
    1. `container` - Contains stateful components
        1. `Blog` - Fetch and render blogs
        2. `Home` - Shows login page and redirects to blogs page if logged in
        3. `Login` - Contains the login component
        4. `Signup` - Contains the signup component
    2. `views` - Contains all presentational components
        1. `Post` - Contains the post card component
        2. `CreatePost` - Contains the create post card
    3. `library` - Contains all the design library components
        1. `Button` - Contains the button component
        2. `Input` - Contains the input component
        3. `Modal` - Contains the modal HOC
    4. `services` - Contains all the services
        1. `auth` - Handles user auth related business logic
    3. `App.js` - Contains the main app component
    4. `index.js` - Contains the main index file
    5. `routes.js` - Contains all the routes

## Libraries used
1. `react` - For building the UI
2. `react-router-dom` - For routing
3. `sass` - For styling
4. `moment` - For date formatting

