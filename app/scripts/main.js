
/**********************
PART I
**********************/

// Step 1

var headerElem = document.body.children[0];

headerElem.style.color = 'blue';

// Step 2

var middleEleye = document.getElementsByTagName('li')[1];
console.log(middleEleye.innerHTML);

// var eleye = document.querySelectorAll('li')[1];
// console.log(eleye);

// Step 3

var newElm = document.createElement('h2');
var mainSec = document.getElementById('main');

mainSec.appendChild(newElm);

/*****************
PART II
*****************/

/* example of using template, then 'find and replace' element */
var templateString = document.getElementById('nameTemplate').innerHTML; // no '#' needed ???

var nameTemplate = _.template(templateString); // this is a function!


// My variable of names.
var names = [
  'bill',
  'jane',
  'sally',
  'mary'
];

// Getting a list of compiled templates by mapping over my list of names.
var nameTemplates = _.map(names, function (personName) {
  return nameTemplate({ name: personName });
}); 		// Notice that an object is being passed into this function
        // this object has the key (oooohhhhh!) that matches my template in HTML.
        // I'm calling the nameTemplate function once for each name and returning it.

var destination = document.querySelector('#nameTarget'); // query selector ..have to use '#'' ???
//Grab the element where I want to put the data

destination.innerHTML = nameTemplates.join('');
//Assign the innerHTML of my destination element to all the name templates joined together.


/* my example */
var elementString = document.getElementById('colorTemplate').innerHTML;

var colorTemplate = _.template(elementString); // fn

var colors = [
	'red',
	'green',
	'blue',
	'wat',
	'one',
	'WatMan',
	'oh wait these were supposed to be colors'
];

var forColors = _.map(colors, function (colorName) {
	return colorTemplate({color: colorName});
});

// var dest = document.getElementById('myTarget'); // this line does the same thing as the line below..so i'm
																										// guessing that answers my # question?
var dest = document.querySelector('#myTarget'); // querySelector with the #

dest.innerHTML = forColors.join('');




