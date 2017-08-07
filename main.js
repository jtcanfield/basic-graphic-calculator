var currentQueString = " ";
var answerbox = document.getElementById("answer_box");
function onClick(value){
  currentQueString += ""+value+"";
  answerbox.textContent += value;
}
function calculate(){
  let result = eval(currentQueString)
  answerbox.textContent = result;
}
function onClickClear(){
  currentQueString = " ";
  answerbox.textContent = " ";
}
