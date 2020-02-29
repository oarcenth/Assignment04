// INIT FUNCTION - CONTAINS: enter, calculate and helper function 
let init = function () {
// HELPER $ Function to get element by id
let $ = function(id){
    return window.document.getElementById(id)
}
// CALCULATE FUNCTION 
let calculate = function () {
    $("result").value = eval(resultsBox);  
}
//EVENT LISTNERS 
$("one").addEventListener("click", enter)
$("two").addEventListener("click", enter)
$("three").addEventListener("click", enter)
$("four").addEventListener("click", enter)
$("five").addEventListener("click", enter)
$("six").addEventListener("click", enter)
$("seven").addEventListener("click", enter)
$("eight").addEventListener("click", enter)
$("nine").addEventListener("click", enter)
$("zero").addEventListener("click", enter)
$("multiply").addEventListener("click", enter)
$("divide").addEventListener("click", enter)
$("add").addEventListener("click", enter)
$("subtract").addEventListener("click", enter)
$("period").addEventListener("click", enter)
$("equal").addEventListener("click", calculate)

// ENTER function  
function enter(val) {
  resultsBox =($("result").value += val.target.value); // resultsBox =  (get the value of the element by id and append to the results box)
    
}; 

} // END OF INIT FUNCTION 

//EVENT LISTENER TO FIRE UP INIT ONCE window is loaded 
window.addEventListener("load", init)
