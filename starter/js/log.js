
const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

//Show input error messages
function showError(input, message) {
    const formControl = input.parentElement;
   
    const small = formControl.querySelector('small');
    small.innerText = message;
     formControl.className = 'form-control error';
}

//show success colour
function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//checkRequired fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`)
        }else {
            showSucces(input);
        }
    });
}


//check input Length
function checkLength(input, min ,max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }else {
        showSucces(input);
    }
}

//get FieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event Listeners
form.addEventListener('submit',function(e) {
    
    checkRequired([username, password]);
    checkLength(username,3,15);
    checkLength(password,6,25);
   
    
    if(isFormValid()==true){
        form.submit();
    }else{
        e.preventDefault();
    }
});

function isFormValid(){
    const inputContainers = form.querySelectorAll(".form-control");
    let result = true;
    inputContainers.forEach((container) =>{
        if(container.classList.contains('error')){
            result = false;
        }
    });

    return result;
}
