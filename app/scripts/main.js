
/**********************
PART 1
**********************/

// #1

var headerElem = document.body.children[0];

// headerElem.innerHTML;

// console.log(headerElem.innerHTML);

headerElem.style.color = 'red';

// console.log(headerElem.style.color);

// #2

var middleEleye = document.getElementsByTagName('li')[1];
console.log(middleEleye.innerHTML);

// var eleye = document.querySelector('li');
// console.log(eleye);

// #3

// var newElm = document.createElement('h2');
// var mainSec = document.getElementById('main');

// mainSec.appendChild(newElm);

/*****************
PART 2
*****************/

// var templateString = document.getElementById('nameTemplate').innerHTML;

// var nameTemplate = _.template(templateString); //fn

// var compiledTemplate = nameTemplate({
// 	name: 'bill'
// });

// console.log(templateString);
// console.log(compiledTemplate);

// document.getElementById('main');

/**********************


var templateString = document.getElementById('nameTemplate').innerHTML;

var nameTemplate = _.template(templateString);


// My variable of names.
var names = [
  'bill',
  'jane',
  'sally',
  'mary'
];

//Getting a list of compiled templates by mapping over my list of names.
var nameTemplates = _.map(names, function (personName) {
  return nameTemplate({ name: personName });// Notice that an object is being passed into this function
                                            // this object has the key that matches my template in HTML.
        //I'm calling the nameTemplate function once for each name and returning it.
});

var destination = document.querySelector('#nameTarget');
//Grab the element where I want to put the data

destination.innerHTML = nameTemplates.join('');
//Assign the innerHTML of my destination element to all the name templates joined together.




var templateNewString = document.getElementById('ageTemplate').innerHTML;

var ageTemplate = _.template(templateNewString);

var addedTemplate = ageTemplate({
	age: 28
});

console.log(templateNewString);
console.log(addedTemplate);






*/

















