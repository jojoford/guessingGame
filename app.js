$(document).ready(function(){
function myFunction(guess)
  return Math.floor(Math.random() * 100) +1;
}

$("form").submit(function(event) {
  event.preventDefault();
  var value = $("#js-user-input-a").val();
  var valueB = $("#js-user-input-b").val();
  
  let result  = concat(valueA, valueB);
  
