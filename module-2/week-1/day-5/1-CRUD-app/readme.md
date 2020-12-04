
tech talk : what the heck does M.V.C stands for ?
-----------------------------------
code along : create a CRUD app with 1 collection
-----------------------------------

# setup
let redo-do-do an express app from scratch  !
init
install
.env
connection db
config static
config views
config view engine
config view partials
config express.urlencoded

# Model (Restaurant)
- name
- specialty
- isVegan
- city
- country
- street
- streetNumber
- zipcode
- likes

# Controllers (app routes)
GET  /home
GET  /restaurant
GET  /restaurant/:id
GET  /restaurant/delete/:id
POST /restaurant
POST /restaurant/:id

BONUS: GET  /api/restaurant (as json array)

# Views
code a basic homepage
code a page with a form to create one restaurant
code a page with **all** restaurants list (with delete button)
code a page with **one** restaurant infos (with a form to update a restaurant)

# Let's understand req.query !

=> add another route : GET /restaurant/search
=> searchBar partial looking for restaurants by name
=> display filtered list in a dedicated view

# Bonus

Add an embeded google map on each restaurant details page
