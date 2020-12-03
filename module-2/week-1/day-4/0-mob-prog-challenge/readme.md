# mob-programming-challenge

## Hey DevSquad 911, let's GIT together !

You've been randomly assigned to a team.  
Pick one member of your team to fork the provided repo : 
https://github.com/Kostra0ne/mob-programming-challenge
He/She will invite the other members of the team as collaborators.
The challenge includes several **iterations**.  
Work as a **team** and pass the **ball** !  
When your turn comes, you are the **driver** and the other are the **navigators**.  
Push your code with **explicit** commit messages.

====

TEAM GOAL : Code an express/hbs application displaying 3 pages.  
- one homepage
- one page displaying a dynamic list of users
- one last page displaying a form (not plugged to the backend... yet !)

====


### -------- Iteration 1 --------

- initialize the folder for npm
- install hbs express mongoose dotenv
- add a .gitignore file excluding the node modules and .env

### -------- Iteration 2 --------


- create a .env file containing:
- PORT = 8080
- MONGO_URI = mongodb://localhost/dev-squad-248
- create /app.js, just print a "Hello, World" message
- create the hbs layout with the minimal markup
- add a dev script in package.json to launch the app

### -------- Iteration 3 --------

- create the folders + files structure:
- /views
 - /partials
- /public
 - /img
 - /css
 - /js
- /models
- /config

- visit [unsplash.com](https://unsplash.com/) to find 3 nice coding related images
- download them in the appropriate folder

### -------- Iteration 4 --------

- create /config/mongodb.js
- use the [Mongoose Introduction](https://my.ironhack.com/lms/courses/course-v1:IRONHACK+WDFT+202006_PAR/units/ironhack-course-chapter_4-sequential_3-vertical)
- connect to the database
- you can test your file separately with : $ node

 
### -------- Iteration 5 --------

- in app.js
- include the .env configuration
- then, require the database config file ;)
- then, set the intial config for hbs and public assets

- for the moment, let's **hardcode** 2 arrays
- A / const **users** (an array objects)
 - each object has 3 properties:
 - name
 - email
 - favoriteLangage
- B / const **images** (an array strings)
 - each string represent the path to an image (see iteration 3)

- listen to the PORT stored in .env



### -------- Iteration 6 --------

- create the app's **get** routes:
- / (renders home + pass **images** as a view parameter )
- /my-dev-squad (renders allUsers + pass **users** as a view parameter)
- /add-new-ironhacker (renders createUser)
- create the related views, with a h1 title only

- **Bonus**: /api/ironhackers (respond users as a json string :)


### -------- Iteration 7 --------

- add an index.css with some **basic** styling


### -------- Iteration 8 --------

- create a navMain **partial** to navigate the app (3 links)
- include [fontawesome](https://fontawesome.com/) in the **layout** head
- add a home **icon** to the navMain


### -------- Iteration 9 --------

- create an imageGallery view **partial** (without any styling)
- imageGallery expects an array of strings as **argument**
- have a look to the app.get("/") route **before** coding your widget
- the images are displayed with a hbs loop (iterate through **this**)


## Work splitting starts here !
Try to work simultaneously on the next iterations !!!

### -------- Iteration 10 --------

- modify home view :
- **include** the imageGallery partial
- have a look to the app.get("/") route **before** ;)


### -------- Iteration 11 --------

- create /public/css/mod.image-gallery.css
- code the styling for the previous partial (imageGallery)
- advice : use flex OR grid for the job :)
- import the css module in index.css


### -------- Iteration 12 --------

- modify allUsers view :
- displays a list of **users** with a hbs loop
- **users** is an array of objects (name, email, favoriteProgLangage) passed as a view parameter
- have a look to the app.get(" /my-dev-squad") route  **before** ;)


### -------- Iteration 13 --------

- modify createUser view :
- displays a form with labels and input
- each input MUST have a name attribute (check @mdn)
 - userName
 - userEmail
 - userFavoriteLangage


### -------- Iteration 14 (and counting :) --------


When done Squad !!!

Everybody should pull the last version
Let's finish the app together :D

----->

- add a models folder a the project's root
- add a new file @ models/User.js
- define our first mongoose Schema
- create a /bin folder and a seed-users.js file
- list all hackers @allUsers
- add a create-hacker **post** route
- send our first POST request @createUser
- add a detail view with an update form
- add an update route
- add a remove button on the hackers list
- add a delete route


