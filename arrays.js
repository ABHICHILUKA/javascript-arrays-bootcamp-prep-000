var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

 function addElementToBeginningOfArray (array,element){
 var newarraay = [...element, ...array]
   return newarray
}


function destructivelyAddElementToBeginningOfArray(array,element){
  return array.unshift(element)
}
function addElementToEndOfArray(array,element){
  var newarray=new Array();
  newarray = array
  return newarray.push(element)
}
function destructivelyAddElementToEndOfArray(array,element){
  return array.push(element)
}
function accessElementInArray(array,index){
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift()
}
function removeElementFromBeginningOfArray(array){
  var sliceele=new Array();
  sliceele=array.slice(0,0)
  return array
}
function destructivelyRemoveElementFromEndOfArray (array){
  array.pop()
 return array
}
function removeElementFromEndOfArray(array){
  var newarray =new Array();
  newarray= array
  newarray.pop()
  return newarray
}
