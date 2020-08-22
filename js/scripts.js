//Business Logic
function processInput(userInput) {
  const numericalArray = [];

  for(i = 0; i <= userInput; i++) {
    numericalArray.push(i);
  }
  console.log(numericalArray);
}


//UI logic
$(document).ready(function() {
  $("#input").submit(function(){
    event.preventDefault();
    $("#display-result").hide();

    const userInput = $("input#user-input").val();

  });
});