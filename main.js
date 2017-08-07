var currentQueString = " ";
var answerbox = document.getElementById("answer_box");
function onClick(object, value){
  console.log(value);
  currentQueString += ""+value+"";
  console.log(currentQueString);
  answerbox.textContent += value;
}
function calculate( nameOfCallbackFunction ){
  console.log(eval(currentQueString));
  let result = eval(currentQueString)
  nameOfCallbackFunction( result );
}
function print( num ){
  answerbox.textContent = num;
}
