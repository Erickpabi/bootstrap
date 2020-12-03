function random(){
    var number =  Math.random();
   var improvedNum = (number * 100000) + 1;
   var goodNum= Math.floor(improvedNum);
   alert("Your amount is " + goodNum + " cedis") ;

  }
  function pin(){
     var amt = prompt("Enter amount");
     if(amt === "" || amt <= 0){
         alert("Thank you for banking with us")
     } else{

     
 var x = prompt("Enter your pin");
 var y = prompt("Confirm pin");
 alert("Transaction successful");
     }
 while(x !== y ){
     alert("Entry unsuccessful"); 
     var x = prompt("Enter your pin");
 var y = prompt("Confirm pin");
 } 
  
  
  }

  function username(){
    if(document.getElementById("script").value.length === 0 ){
      alert("Please enter your name");
      return false;
    } 
  
    
    var addressIsLegal = true;
   var eEntered = document.getElementById("email").value;
  
   if(document.getElementById("email").value.length ===0) {
     alert("Please enter your email");
   } 
   if (eEntered.indexOf(" ") !== -1) {
   addressIsLegal = false;
   } 
   if (eEntered.indexOf("@") < 1 || eEntered.indexOf("@") > eEntered.length - 5) {
   addressIsLegal = false;
   } 
   if (addressIsLegal === false) {
   alert("Please correct email address");
   return false;
   }
   }
    