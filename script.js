var locations = []; // this array will hold your objects

// object constructor
function State(state, revenue, locationCount) {
  this.state = state;
  this.revenue = revenue;
  this.locationCount = locationCount;
  this.averageRevenue = function() {
    return this.revenue/this.locationCount;
  };
}

// object instances
var illinois = new State('IL', 5000, 12);
var minnesota = new State('MN', 300, 3);
var nevada = new State('NV', 25000, 1);

// console.log(illinois);
// console.log(minnesota);
// console.log(nevada);

// push object instances to locations array

locations.push(illinois, minnesota, nevada);
console.log(locations);

// DO NOT MODIFY THIS CODE
$(document).ready(function () {
  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span>' +  element.state + '</span>');
    $li.append('<span>' +  element.revenue + '</span>');
    $li.append('<span>' +  element.locationCount + '</span>');
    $li.append('<span>' +  element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});

// Object Challenge
// Git Repo
// https://github.com/PrimeAcademy/object_challenge
// Description
// Pizza For The People Object Challenge
// So, you just learned about objects and you're eager to put your knowledge to test! You are in luck!
//
// You have been given the following data
//
// ["IL", 5000, 12]
// ["MN", 300, 3]
// ["NV", 25000, 1]
//
// which represents the state, annual revenue, and number of locations for a pizza chain, Pizza For The People.
//
// Pizza For The People wants to use your object knowledge to
//
// display their locations as a list
// display the average amount of revenue per location for each chain
// Implementation Instructions
// Fork the repo for this project.
// Create an object constructor for each state (probably named something like State or Region). The object properties should include state, revenue, locationCount).
// Create a function, within the constructor, that calculates and returns the average revenue. Name this function averageRevenue.
// Create an instance of each object using the provided data.
