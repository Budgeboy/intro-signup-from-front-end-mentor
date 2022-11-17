let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
let eMail = document.getElementById("mail");
let pswrd = document.getElementById("password");


function validateForm(){
    if(fName.value == ""){
        document.getElementById("error-msg1").innerHTML = "First Name cannot be empty";
        document.getElementById("fName").style.border = "1px solid red";
        document.getElementById("error-img1").style.display = "block";
    }else if(fName.value.length < 3){
        document.getElementById("error-msg1").innerHTML = "First Name require min 3 char";
    }else{
        document.getElementById("error-msg1").innerHTML = "";
    }

    if(lName.value == ""){
        document.getElementById("error-msg2").innerHTML = "Last Name cannot be empty";
        document.getElementById("lName").style.border = "1px solid red";
        document.getElementById("error-img2").style.display = "block";
    }else if(lName.value.length < 3){
        document.getElementById("error-msg2").innerHTML = "Last Name require min 3 char";
    }else{
        document.getElementById("error-msg2").innerHTML = "";
    }

    if(mail.value == ""){
        document.getElementById("error-msg3").innerHTML = "Mail field cannot be empty";
        document.getElementById("mail").style.border = "1px solid red";
        document.getElementById("error-img3").style.display = "block";
    }else if(mail.value.length < 3){
        document.getElementById("error-msg3").innerHTML = "First Name require min 3 char";
    }else{
        document.getElementById("error-msg3").innerHTML = "";
    }

    if(password.value == ""){
        document.getElementById("error-msg4").innerHTML = "Password cannot be empty";
        document.getElementById("password").style.border = "1px solid red";
        document.getElementById("error-img4").style.display = "block";
    }else{
        document.getElementById("error-msg4").innerHTML = "";
    }
    // if (flag){
    //     return true;
    // }else{
    //     return false;
    // }
}
