
const form =document.getElementById('form');
const password1=document.getElementById('password1');
const password2=document.getElementById('password2');
const messageContainer=document.querySelector('.message-container');
const message=document.getElementById('message');
const isValid=false;
const passwordMatch=false;

function validateForm(e) {
        e.preventDefault();
        // Using Constraint API
        const isValid = form.checkValidity();

        // Style main message for an error
        message.textContent = isValid ? "Don't Hesitate!" : "Please fill out all fields.";
        message.style.color = isValid ? 'green' : 'red';
        messageContainer.style.borderColor = isValid ? 'green' : 'red';

        // Check if passwords match
        const passwordMatch = password1.value === password2.value;
        message.textContent = passwordMatch ? message.textContent : "Make sure passwords match.";
        message.style.color = passwordMatch ? message.style.color : 'red';
        messageContainer.style.borderColor = passwordMatch ? messageContainer.style.borderColor : 'red';
        [password1, password2].forEach(input => input.style.borderColor = passwordMatch ? 'green' : 'red');
    }

    // Event Listener
    form.addEventListener('submit', validateForm);