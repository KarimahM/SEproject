let email= document.forms["myform"]["email"];
let name= document.forms["myform"]["fname"];
let mess = document.forms["myform"]["Message"];
// let s = document.getElementById("Message");
let sbtn = document.getElementById("subbtn");
let Message

sbtn.onclick = function(e){
    if(name.value ===''){
    alert("Name is blank.");
       
        name.focus();
        e.preventDefault();
    }
    else if(email.value ===''){
    alert("Email is blank.");
       
        email.focus();
        e.preventDefault();
    }

    else if(mess.value ===''){
        alert("Nothing is in message box to submit")

        mess.focus();
        e.preventDefault();
    }

    else{
        alert("Message submitted succesfully, I will get back to you within 24hrs");
        e.preventDefault();
    }
}