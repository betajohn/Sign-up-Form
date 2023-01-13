let password=document.getElementById("password");
let confirmPassword=document.getElementById("confirmPassword");
let confirmPasswordMessage=document.getElementById("confirmPasswordMessage");

confirmPassword.addEventListener("blur", (e)=>{
  if(e.target.value==password.value && e.target.value!=""){
    console.log("iguales");
    confirmPasswordMessage.style.visibility="hidden";
    confirmPassword.style.backgroundColor="rgb(175, 225, 175)";
    
  }else{
    
      confirmPasswordMessage.style.visibility="visible";
    confirmPassword.style.backgroundColor="red";
    
    
  }
});

password.addEventListener("blur", (e)=>{
  if(e.target.value==confirmPassword.value && e.target.value!=""){
    console.log("iguales");
    confirmPasswordMessage.style.visibility="hidden";
    confirmPassword.style.backgroundColor="rgb(175, 225, 175)";

  }else{
    
      confirmPasswordMessage.style.visibility="visible";
    confirmPassword.style.backgroundColor="red";
    
  } 
  
});