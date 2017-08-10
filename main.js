var currentQueString = " ";
var recentlyCalculated = false;
var lastCharacter = 0;
var numOfOpenParens = 0;
var answerbox = document.getElementById("answer_box");
function onClick(value, canReCalculate){
  messagebox.innerHTML = "<br>";
  if (recentlyCalculated === true && canReCalculate === false){
    currentQueString = " ";
    answerbox.textContent = " ";
  }
  if (isNaN(lastCharacter) && typeof value !== "number" && value !== "-" && value !== "(" && value !== ")"){
    return
  }
  switch (value){
    case "(":
      console.log("its a (");
      break;
    case ")":
      console.log("its a )");
      break;
  }
  // if (value === "("){
  //   numOfOpenParens += 1;
  // }
  // if (value === ")"){
  //
  // } else if (value === ")"){
  //   numOfOpenParens -= 1;
  // }
  currentQueString += ""+value+"";
  answerbox.textContent += value;
  recentlyCalculated = false;
  lastCharacter = Number(currentQueString.charAt((currentQueString.length) - 1));
  console.log(lastCharacter);
}
function calculate(){
  try {
      if(isNaN(lastCharacter) && lastCharacter !== ")") throw "Expecting Number at End";
  }
  catch(err) {
      messagebox.innerHTML = err;
      return
  }
  let result = eval(currentQueString);
  recentlyCalculated = true;
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
