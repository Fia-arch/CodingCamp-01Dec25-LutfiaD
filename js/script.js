console.log('Hello this is Fia\'s portfolio website!');

welcomeMessage();

function welcomeMessage() {
    let userResponse = prompt("Welcome to Fia's Portfolio Website! Input your name?");

    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Guest";
    }
    document.getElementById("welcome-speech").innerHTML = "Hello " + userResponse + ", welcome to Fia's Portfolio Website!";
    
}

function validateForm() {}