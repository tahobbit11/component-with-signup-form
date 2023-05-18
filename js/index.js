//text input
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
// button
const button = document.querySelector(".trial-button");
//Error message added
const firstNameError = document.querySelector(".first-name-error");
const lastNameError = document.querySelector(".last-name-error");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error")

//Need a function that sees if text is inputed
//Need a listener that checks all text boxes to see if they are all valid
//Need a function that displays the error text

firstNameCheck = () => {
    let text = firstName.value;
    if (text == ""){
        firstNameError.style.display = 'flex';
        firstName.style.border = '1px solid hsl(0, 100%, 74%)';
        return false;
    } else {
        return true;
    }
};

lastNameCheck = () => {
    let text = lastName.value;
    if(text == ""){
        lastNameError.style.display = 'flex';
        lastName.style.border = '1px solid hsl(0, 100%, 74%)';
        return false;
    } else {
        return true;
    }
};

emailCheck= () => {
    let text = email.value;
    if(text == ""){
        emailError.style.display = 'flex';
        email.style.border = '1px solid hsl(0, 100%, 74%)';
        return false;
    } else if(!text.includes('@')){
        emailError.style.display = 'flex';
        email.style.border = '1px solid hsl(0, 100%, 74%)';
        return false;
    } else {
        return true;
    }
};

passwordCheck = () => {
    let text = password.value;
    if(text == ""){
        passwordError.style.display = 'flex';
        password.style.border = '1px solid hsl(0, 100%, 74%)';
        return false;
    } else {
        return true;
    }
};

button.addEventListener("click", function(e){
    e.preventDefault();

    if(e) {
        firstNameError.style.display = 'none';
        lastNameError.style.display = 'none';
        emailError.style.display = 'none';
        passwordError.style.display = 'none';
        firstName.style.border = '1px solid lightgrey';
        lastName.style.border = '1px solid lightgrey';
        email.style.border = '1px solid lightgrey';
        password.style.border = '1px solid lightgrey';
    };

    let first = firstNameCheck();
    let last = lastNameCheck();
    let mail = emailCheck();
    let pass = passwordCheck();

    if(!first || !last || !mail || !pass){
        return
    };
});