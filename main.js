var currentQueString = " ";
var answerbox = document.getElementById("answer_box");
function onClick(object, value){
  console.log(value);
  currentQueString += ""+value+"";
  console.log(currentQueString);

}
function calculate( nameOfCallbackFunction ){
  console.log(eval(currentQueString));
  let result = eval(currentQueString)
  nameOfCallbackFunction( result );
  // var currentQueString = "";
}
function print( num ){
  answerbox.textContent = num;
}
