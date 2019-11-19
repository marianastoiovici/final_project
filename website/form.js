function openLoginForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeSignUpForm() {
    document.getElementById("mySignUpForm").style.display = "none";     
    window.location.replace("homepage.html");   
}

function closeLoginForm() {
    document.getElementById("myForm").style.display = "none";
}