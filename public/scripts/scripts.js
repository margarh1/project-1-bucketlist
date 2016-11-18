console.log("SignUp and LogIn scripts connected!!");

$(document).ready(function(){

  // part of your code for this step:
    // select the form and serialize its data
    var signupData = $("#signup-form").serialize();
    console.log(signupData);
    // send POST request to /users with the form data
    $.post('/users', signupData, function(response){
      console.log(response);
    })

      
});
