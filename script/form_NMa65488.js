
function runValidate(form){
    

    if(validateFirstName(form) && validateLastName(form) && validateAge(form)){
        location.replace("./Quiz_Game_NMa65488.html");
        return false;
    }
} 


function validateFirstName(form){
    var name = form.elements["firstName"]; // the firstName object

    if(name.validity.valueMissing){
        name.setCustomValidity("Please enter your first name here");
        return false;
    }
    else{
        name.setCustomValidity("");
        return true;
    }

    
}
function validateLastName(form){
    var lastName = form.elements["lastName"]; // the firstName object

    if(lastName.validity.valueMissing){
        lastName.setCustomValidity("Please enter your last name here");
        return false;
    }
    else{
        lastName.setCustomValidity("");
        return true;
    }
}

function validateAge(form){
    var age = form.elements["age"];

    if(age.validity.valueMissing){
        age.setCustomValidity("Please enter your age");
        return false;
    }
    else if(age.validity.rangeUnderflow){
        age.setCustomValidity("You are too young to play this game");
        return false;
    }
    else if(age.validity.rangeOverflow){
        age.setCustomValidity("Okay, grandpa, enough jokes here");
        return false;
    }
    else{
        age.setCustomValidity("");
        return true;
    }
} // end validateAge function