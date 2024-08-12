const prompt = require('prompt-sync')()
// Create an object that represents your favorite restaurant with the keys name (string), cuisine (string), and rating (number)
let favoriteRestaurant = {
  name: "Ugly Baby",
  cuisine: "thai",
  rating: 9
}

// Console log the restaurant's name using the object
console.log(favoriteRestaurant.name)


// Add a new key called location and add the restaurant's location
favoriteRestaurant.location = "407 Smith St, Brooklyn"


// Change the rating of the restaurant to increase it by one
favoriteRestaurant.rating  += 1


// Add a new key called test and set the value to null
favoriteRestaurant.test = null


// Delete the test key
delete favoriteRestaurant.test


// Console log the object to see if the test key is gone
console.log(favoriteRestaurant)


// Loop through the object and print every key and element.
// It should look like: 
// name is Ugly Baby
// cuisine is thai
// rating is 10
// location is 407 Smith St, Brooklyn

for (let key in favoriteRestaurant) {
  console.log(key, favoriteRestaurant[key])
}






