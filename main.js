var currentQueString = " ";
function onClick(object, value){
  console.log(value);
  currentQueString += ""+value+"";
  console.log(currentQueString);
}
function calculate( nameOfCallbackFunction ){
  console.log(eval(currentQueString));
  let result = 4 * ( 35 / 7 );
  nameOfCallbackFunction( result );
  // var currentQueString = "";
}
function print( num ){
  var element = document.getElementById("answer_box");
  element.textContent = num;
}
