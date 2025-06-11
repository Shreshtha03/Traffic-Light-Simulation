
const correctUsername = "admin"; 
const correctPassword = "123"; 

function handleLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errormessage");

    if (username === correctUsername && password === correctPassword) {
        
        window.location.href = "index_traffic.html";
    } 
    else {        
        errorMessage.textContent = "Wrong username or password!";
    }

}

