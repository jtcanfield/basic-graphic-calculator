var currentQueString = " ";
var recentlyCalculated = false;
let lastCharacter = currentQueString.charAt((currentQueString.length) - 1);
var answerbox = document.getElementById("answer_box");
function onClick(value, canReCalculate){
  if (recentlyCalculated === true && canReCalculate === false){
    currentQueString = " ";
    answerbox.textContent = " ";
  }
  currentQueString += ""+value+"";
  answerbox.textContent += value;
  recentlyCalculated = false;
  console.log(lastCharacter);
}
function calculate(){
  // if
  recentlyCalculated = true;
  let result = eval(currentQueString);
  answerbox.textContent = result;
}
function onClickClear(){
  currentQueString = " ";
  answerbox.textContent = " ";
}
function onClickBackspace(){
  currentQueString = currentQueString.slice(0, -1);
  answerbox.textContent = currentQueString;
}
/*TODO
Need to add function to make sure number is at the end
need to make sure that the operators are not sent more than once
*/
