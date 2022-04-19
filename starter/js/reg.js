function formValidation() {
    var name = document.registration.name;
    var college = document.registration.college;
    var usn = document.registration.usn;
    var uadd = document.registration.address;
    var email = document.registration.email;
    var state = document.registration.state;
    var city = document.registration.city;
    var dob = document.registration.dob;
    var sport = document.registration.sport;
    var yes = document.registration.yes;
    var no = document.registration.no;

    if (allLetter1(name)) {
        if (allLetter2(college)) {
            if (usn_validation(usn, 10, 12)) {
                if (ValidateEmail(email)) {
                        if (allLetter3(state)) {
                            if (allLetter4(city)) {
                                if (alphanumeric(uadd)) {
                                    if (sportselect(sport)) {

                                       if (validans(yes, no)) {

                                       }
                                    }
                                }
                            }
                        }
                    }
                
            }
        }
    }
    return false;

}


function allLetter1(name) {
    var letters = /^[A-Za-z]+$/;
    if (name.value.match(letters)) {
        return true;
    }
    else {
        alert('Please enter your name');
        name.focus();
        return false;
    }
}

function allLetter2(college) {
    var letters = /^[A-Za-z]+$/;
    if (college.value.match(letters)) {
        return true;
    }
    else {
        alert('Please enter college name');
        college.focus();
        return false;
    }
}
function usn_validation(usn, mx, my) {
    var usn_len = usn.value.length;
    if (usn_len == 0 || usn_len >= my || usn_len < mx) {
        alert("USN should not be empty / length should be between " + mx + " to " + my);
        usn.focus();
        return false;
    }
    return true;
}

function alphanumeric(uadd) {
    var letters = /^[0-9a-zA-Z]+$/;
    if (uadd.value.match(letters)) {
        return true;
    }
    else {
        alert('User address must have alphanumeric characters only');
        uadd.focus();
        return false;
    }
}

function ValidateEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
    
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        // document.form1.text1.focus();
        email.focus();
        return false;
    }
}

function allLetter3(state) {
    var letters = /^[A-Za-z]+$/;
    if (state.value.match(letters)) {
        return true;
    }
    else {
        alert('Please enter valid state name');
        state.focus();
        return false;
    }
}

function allLetter4(city) {
    var letters = /^[A-Za-z]+$/;
    if (city.value.match(letters)) {
        return true;
    }
    else {
        alert('Please enter vlaid city name');
        city.focus();
        return false;
    }
}

function sportselect(sport) {
    if (sport.value == "Default") {
        alert('Select your sport from the list');
        sport.focus();
        return false;
    }
    else {
        return true;
    }
}

function validans(yes, no) {
    x = 0;

    if (yes.checked) {
        x++;
    } if (no.checked) {
        x++;
    }
    if (x == 0) {
        alert('Select Yes/No');
        yes.focus();
        return false;
    }
    else {
        alert('Form Succesfully Submitted');
        // location.href = "transparent.html";
        return true;
    }
}

