
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {

  return array = [element, ...array];

}

function destructivelyAddElementToBeginningOfArray(array, element) {


  array.unshift(element);
  return array;

}



function  addElementToEndOfArray(array, element) {

  array.push(element);
  return array;
}


function destructivelyAddElementToEndOfArray(array, element) {

  array[array.length-1] = element;
  return array;
  
}