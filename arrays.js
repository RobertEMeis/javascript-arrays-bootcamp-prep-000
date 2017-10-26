
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {

  return array = [element, ...array];

}

function destructivelyAddElementToBeginningOfArray(array, element) {


  array[0] = element;
  return array;

}



function  addElementToEndOfArray(array, element) {

  array += element; 
}
