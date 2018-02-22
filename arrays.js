var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

 function addElementToBeginningOfArray (array,element){
 var newarray = [element, ...array]
   return newarray
}


function destructivelyAddElementToBeginningOfArray(array,element){
  
  
}

function addElementToEndOfArray(array,element){
  var newarray =[...array,element]
  return newarray
}

function destructivelyAddElementToEndOfArray(array,element){
  var array=[...array,element]
   
  return array
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
