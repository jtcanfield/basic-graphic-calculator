var currentQueString = " ";
var answerbox = document.getElementById("answer_box");
function onClick(value){
  console.log(currentQueString);
  currentQueString += ""+value+"";
  answerbox.textContent += value;
}
function calculate(){
  let result = eval(currentQueString);
  answerbox.textContent = result;
  currentQueString = " ";
}
function onClickClear(){
  currentQueString = " ";
  answerbox.textContent = " ";
}
