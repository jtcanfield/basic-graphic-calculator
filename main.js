var currentQueArray = [];
function onClick(object, value){
  console.log(object, value);
}

function calculate( nameOfCallbackFunction ){
  let result = 4 * ( 35 / 7 );
  nameOfCallbackFunction( result );
}
function print( num ){
  var element = document.getElementById("answer_box");
  element.textContent = num;
}
