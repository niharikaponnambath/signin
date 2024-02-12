let sigInEmail = document.getElementById("sigInEmail");
let NewPassword = document.getElementById("NewPassword");
let signInBtn = document.getElementById("signInBtn");
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

signInBtn.addEventListener("click", () => {
    if (sigInEmail.value.trim() === "") {
        alert("Enter Your Email");
    } else if (NewPassword.value.trim() === "") {
        alert("Enter Your Password");
    } else if (!emailRegex.test(sigInEmail.value.trim())) {
        alert("Enter a valid Email");
    } else if (!isValidPassword(NewPassword.value.trim())) {
        alert("Enter a Strong Password");
    }
});