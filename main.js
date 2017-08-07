var currentQueString = " ";
var recentlyCalculated = false;
var answerbox = document.getElementById("answer_box");
function onClick(value, canReCalculate){
  if (recentlyCalculated === true && canReCalculate === false){
    currentQueString = " ";
    answerbox.textContent = " ";
  }
  currentQueString += ""+value+"";
  answerbox.textContent += value;
  console.log(currentQueString);
  recentlyCalculated = false;
}
function calculate(){
  let result = eval(currentQueString);
  answerbox.textContent = result;
  recentlyCalculated = true;
}
function onClickClear(){
  currentQueString = " ";
  answerbox.textContent = " ";
}
