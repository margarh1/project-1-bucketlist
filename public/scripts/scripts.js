console.log("SignUp and LogIn scripts connected!!");

$(document).ready(function(){

  // part of your code for this step:
    // select the form and serialize its data
    // $('#signup-form').on('submit', function handleSignup(e){
    //   e.preventDefault();
    //   console.log("serialzied: " + $("#signup-form").serialize());
    //   var signupData = $("#signup-form").serialize();
    //   console.log("our signup data is: " + signupData);
    //   // send POST request to /users with the form data
    //   $.post('/users', signupData, function(response){
    //     console.log(response);
    //   });
    //
    // })


    // $('#login-form').on('submit', function(e) {
    //   e.preventDefault();
    //     // select the form and serialize its data
    //       // note: this is the form because the event handler
    //       //   was triggered from the form
    //       var loginData = $(this).serialize();
    //       // send POST request to /login with the form data
    //       $.post('/login', loginData, function(response) {
    //         console.log(response);
    //       });
    //     });

    var email = $("#email");
    var password= $("#password");

// TO CHECK IF THERE IS A EMAIL MISMATCH TYPE AND SHOW A MESSAGE ON CLIENT SIDE
//     email.addEventListener("keyup", function (event){
//
//       if (email.validity.typeMismatch){
//         email.setCustomValidity("Invalid e-mail!");
//       } else {
//          email.setCustomValidity("");
//       }
//     })
//
// // TO CHECK IF IT IS A PASSWORD MATCH MINLENGTH AND SHOW A MESSAGE ON CLIENT SIDE
//     password.addEventListener("keyup", function (event){
//
//       if (password.validity.minlengthMismatch){
//         password.setCustomValidity("Invalid password!");
//       } else {
//          password.setCustomValidity("");
//       }
//     })



});
