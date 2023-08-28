/*Sports Bar

The people array below is populated with person objects that have a person's first and last name, age, interests, and favorite food. You will use this array to make functions for the sports bar.

*/



const people = [
  {
    firstName: "Jack",
    lastName: "Jones",
    age: 35,
    interests: ["painting", "sports", "sailing"],
    favFood: "Wings",
  },
  {
    firstName: "Kate",
    lastName: "Mason",
    age: 25,
    interests: ["fashion", "traveling", "surfing"],
    favFood: "Nachos",
  },
  {
    firstName: "Malik",
    lastName: "Johnson",
    age: 19,
    interests: ["sports", "movies", "pottery"],
    favFood: "Pizza",
  },
  {
    firstName: "Travis",
    lastName: "Taylor",
    age: 21,
    interests: ["fashion", "sports", "photography"],
    favFood: "Cheeseburger",
  },
  {
    firstName: "Melanie",
    lastName: "Jackson",
    age: 30,
    interests: ["cooking", "sports", "jounralism"],
    favFood: "Tacos",

  },
];


const menu = [
  "Ultimate Nachos",
  "Baja Shrimp Tacos",
  "BBQ Bacon Cheeseburger",
  "Pepporoni Pizza",
  "Buffalo Wings",
];





/*Write a function, getSportsBarCustomers, that takes in an array of people, and 

returns a new array of people who like sports and are the age of 21 or over 

(should look like this ["Jack", "Travis", "Melanie"]) using filter and map
*/

function getSportsBarCustomers(array) {
  // your code here
}









/*
Write a function, getCustomersOrders, that takes in an array of people and an array of dishes that are on the sports bar menu (see above). 

When called, the function returns an array of objects that contains a customer's name and the dish that has their favorite food in it. 

using map and forEach should look like this:
*/

function getCustomersOrders(arrayOfPeople, menuArray) {
  // your code here
  
}







//answers
function getSportsBarCustomers(array) {
  //likes sports and are over 21 
  return array 
  .filter(person => person.interests.includes('sports') && person.age >= 21)
  .map(person => person.firstName); 
  
}


function getCustomersOrders(arrayOfPeople, menuArray) {
  // your code here
	return arrayOfPeople.map((person) => {
   
	let dish; 
    
    menuArray.forEach((menuDish) => {
      if(menuDish.toLowerCase().includes(person.favFood.toLowerCase())){
       dish = menuDish; 
      }
    });
    
    let order = {};
    order[person.firstName] = dish;
    return order; 
}); 
}



