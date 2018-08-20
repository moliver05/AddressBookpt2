// business logic
var wordConverter = function(num){
  var result = [];


  if(num < 0){
    return "I suggest a better number."
    }else if(num > 0 && num%3 === 0){
    return "I'm sorry, Dave. I'm afraid I can't do that.";
    } else if(num.toString().indexOf('1') > -1){
    return "Boop!";
    } else if(num%10 === 0){
    return "Beep!";
    } else {
    for(var i = 0; i <= num; i += 1){
      result.push(i);
      };
    }
    return result.toString();
  }
// user interface
$(document).ready(function() {
  $("#magicform").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($('input#inputOne').val());
    var userResult = wordConverter(userInput);
    $("#outputR").text(userResult);
    $('#magicform').trigger('reset');
  });
});
