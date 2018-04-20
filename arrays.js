var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles" ]


function addElementToBeginningOfArray(array, element) {
// take two parameters--- array and element
// return an array and not modify the original
  newArray = [element, ...array]
  return newArray
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  // alter original array passed in
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}