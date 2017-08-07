var currentQueArray = [];
function onClick(object, value){
  console.log(object);
  console.log(value);
  currentQueArray.push(value)
}
function calculate( nameOfCallbackFunction ){
  console.log(currentQueArray);
  let result = 4 * ( 35 / 7 );
  nameOfCallbackFunction( result );
}
function print( num ){
  var element = document.getElementById("answer_box");
  element.textContent = num;
}
