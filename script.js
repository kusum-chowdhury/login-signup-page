const error_msg_username = document.querySelector(".error-message-username");
const button = document.querySelector("#button");
const username = document.querySelector("#username");
const email = document.querySelector("#email")
const error_msg_email = document.querySelector(".error-message-email");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var passwordformat = /^(?=.*\d)(?=.*[A-Z])(.{12,50})$/;
const password = document.querySelector("#password");
const error_msg_password = document.querySelector(".error-message-password")
const confirm_password = document.querySelector("#confirm-password");
const error_msg_confirm_password = document.querySelector(".error-message-confirm-password");
var registerCheck=[];

button.addEventListener("click", function(){
    var isUserNameError,isEmailError,isPassError,isConfirmPassError;

    if(username.value.length < 4) {
    error_msg_username.innerHTML = "wrong";
    } else {
        error_msg_username.innerHTML = ""
        isEmailError = false;
    }

    if(email.value.match(mailformat)){
       error_msg_email.innerHTML = "";
    } else {
        error_msg_email.innerHTML = "wrong";
        isEmailError = false;
    }
    if(password.value.match(passwordformat)){
        error_msg_password.innerHTML = ""
    } else {
        error_msg_password.innerHTML = "wrong";
        isPassError =  false;
        
    }
    if(confirm_password.value === password.value ) {
        error_msg_confirm_password.innerHTML = ""
        isConfirmPassError = false;
    } else {
        error_msg_confirm_password.innerHTML = "wrong";
    }
    registerCheck = [isUserNameError, isEmailError, isPassError, isConfirmPassError];
    if(!registerCheck.includes(true)){
        localStorage.setItem("userEmail", email.value);
        localStorage.setItem("userPassword", confirm_password.value);
        localStorage.setItem("loginUserName", username.value);
    }
})
