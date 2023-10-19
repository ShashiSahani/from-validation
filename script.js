const form =document.getElementById('form');
const password1=document.getElementById('password1');
const password2=document.getElementById('password2');
const messageContainer=document.querySelector('.message-container');
const message=document.getElementById('message');
const isValid=false;
function validateForm(){
    //using Contraint Api
    isValid=form.checkValidity();
    //Style main message for an error
    if(!isValid){
        message.textContent="Please Fill out all fields.";
        message.style.color='red';
        messageContainer.style.borderColor='red'
    }
    //check password if match
    if(password1.value===password2.value){
        passwordMatch=true;
        password1.style.borderColor='green'
        password2.style.borderColor='green'
    }else{
        passwordMatch=false;
        message.textContent="Make sure passwords match.";
        message.style.color='red';
        messageContainer.style.borderColor='red';
        password1.style.borderColor='red';
        password2.style.borderColor='red';
    }
}
function processFormData(e){
    e.preventDefault();   
    console.log(e)
}
//Evenet Listenerx

form.addEventListener('submit',processFormData);