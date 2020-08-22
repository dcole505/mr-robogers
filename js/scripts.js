//Business Logic
function processInput(userInput) {
  const numericalArray = [];
  let stringArray = [];

  for(i = 0; i <= userInput; i++) {
    numericalArray.push(i);
  }
  stringArray = numericalArray.map(String);
  for(i = 0; i < stringArray.length; i++) {
    if ((stringArray[i].indexOf("1") > -1) && (!(stringArray[i].includes("2"))) && (!(stringArray[i].includes("3")))) {
      stringArray[i] = stringArray[i].replace(stringArray[i], "Beep!");
    }
  }
  console.log(stringArray);
}


//UI logic
$(document).ready(function() {
  $("#user-input").submit(function(){
    event.preventDefault();
    $("#display-result").hide();

    const userInput = $("input#user-input").val();
    processInput(userInput);

  });
});