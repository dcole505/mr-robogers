//Business Logic
function processInput(userInput) {
  const numericalArray = [];
  let stringArray = [];

  for(i = 0; i <= userInput; i++) {
    numericalArray.push(i);
  }
  stringArray = numericalArray.map(String);
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