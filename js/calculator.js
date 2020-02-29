//HELPER FUNCTION


let init = function () {

let $ = function(id){
    return window.document.getElementById(id)
}

// function enter(val) {
//     $("result").value += $(val).value;
    
     

//     // window.console.log("The helpful function is working");
//     // var one = $("period").value;
//     // window.console.log("the value of the id is " + one);
// }; 

let calculate = function () {
    $("result").value = eval(addedThings);  
}
let one = $("one");
one.addEventListener("click", enter)
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


function enter(val) {
  addedThings =($("result").value += val.target.value); 
    
     

    // window.console.log("The helpful function is working");
    // var one = $("period").value;
    // window.console.log("the value of the id is " + one);
}; 


}


window.addEventListener("load", init)
// let one = $("one")

// one.addEventListener("click", function(){
//     window.console.log("you clicked in number yessss");
// }); 

// document.getElementById("one").addEventListener("click", function (){
//     window.console.log("the click was registered")
// })
