var currentQueString = " ";
var recentlyCalculated = false;
let lastCharacter = 0;
var answerbox = document.getElementById("answer_box");
function onClick(value, canReCalculate){
  messagebox.innerHTML = "<br>";
  if (recentlyCalculated === true && canReCalculate === false){
    currentQueString = " ";
    answerbox.textContent = " ";
  }
  if (isNaN(lastCharacter) && typeof value !== "number" && value !== "-"){
    return
  }
  currentQueString += ""+value+"";
  answerbox.textContent += value;
  recentlyCalculated = false;
  lastCharacter = Number(currentQueString.charAt((currentQueString.length) - 1));
  console.log(lastCharacter);
}
function calculate(){
  try {
      if(isNaN(lastCharacter)) throw "Expecting Number at End";
  }
  catch(err) {
      messagebox.innerHTML = err;
      return
  }
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
