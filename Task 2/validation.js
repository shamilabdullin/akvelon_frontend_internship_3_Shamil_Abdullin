let regUserName = /^[a-zA-Z\s]{1,120}$/;
let regPassword = /^.{8,}$/;

let userName = document.querySelector('.userName');
let email = document.querySelector('.email');
let password = document.querySelector('.password');


document.querySelector('.btn').onclick = function(e){
    if(!validate(regUserName, userName.value)){
        e.preventDefault();
        alert('Enter correct login (only latin symbols from 1 to 120)');
    }
    if(!validate(regPassword, password.value)){
        e.preventDefault();
        alert('Enter correct password (at least 8 symbols)');
    }
    if(email.value == ''){
        alert('enter correct Email');
    }
    if(validate(regUserName, userName.value) && validate(regPassword, password.value) && email.value !== ''){
        printValues();
    }
}

function validate(regex, inp){
    return regex.test(inp);
}

function printValues(){
    console.log('User name: ' + userName.value);
    console.log('User email: ' + email.value);
    console.log('User password: ' + password.value);
}