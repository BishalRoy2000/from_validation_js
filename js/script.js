function seterror(id,error){
   element=document.getElementById(id);
   element.getElementsByClassName("frmerror")[0].innerHTML=error;
}

function clearerror(){
    error=document.getElementsByClassName("frmerror");
    for(let i of error){
        i.innerHTML="";
    }
    document.forms["myform"]["fname"].style.border="2px solid gray";
    document.forms["myform"]["femail"].style.border="2px solid gray";
    document.forms["myform"]["fphone"].style.border="2px solid gray";
    document.forms["myform"]["fpass"].style.border="2px solid gray";
    document.forms["myform"]["fcpass"].style.border="2px solid gray";
}

function validateform(){
    clearerror();
    let returnval=true;
    let name=document.forms["myform"]["fname"].value;
    if(name.length<5){
        seterror("name","*Name length is to short");
        returnval=false;
        document.forms["myform"]["fname"].style.border="2px solid red";
    }

    let email=document.forms["myform"]["femail"].value;
    if(email.length>40){
        seterror("email","*Email is too long");
        returnval=false;
        document.forms["myform"]["femail"].style.border="2px solid red";
    }

    let phone=document.forms["myform"]["fphone"].value;
    if(phone.length!=10){
        seterror("phone","*Phone number should be of 10 digits");
        returnval=false;
        document.forms["myform"]["fphone"].style.border="2px solid red";
    }
    let password=document.forms["myform"]["fpass"].value;
    let pass= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(password.match(pass)){
        returnval=true;
    }
    else{
        seterror("pass","*Password should be atleast one uppercase, one lowercase, one special character, one number and 8 characterl long");
        returnval=false;
        document.forms["myform"]["fpass"].style.border="2px solid red";
    }
    let confirmpassword=document.forms["myform"]["fcpass"].value;
    if(password!==confirmpassword){
        seterror("cpass","*Password not match");
        returnval=false;
        document.forms["myform"]["fcpass"].style.border="2px solid red";
    }

    
    return returnval;
}