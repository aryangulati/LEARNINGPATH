function validateEmail(email) {
    let emailCheck= /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
   if(emailCheck.test(email)){ //check that if above regex is present in it 
       return "Valid email address!";
       
   }
   else{
       return "Invalid email address!";
   }
}