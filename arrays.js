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
  newArray = [...array, element]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}
