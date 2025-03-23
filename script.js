var card = document.getElementById("card");

function openREGISTER() {
    clearInputs(); // Clear form fields
    card.style.transform = "rotateY(-180deg)";
}

function openLOGIN() {
    clearInputs(); // Clear form fields
    card.style.transform = "rotateY(0deg)";
}

function clearInputs() {
    document.querySelectorAll(".input-box").forEach(input => input.value = "");
}

function validateLoginForm(event) {
    let password = document.getElementById("login-password").value;

    if (password.length < 8) {
        alert("Password must be at least 8 characters long!");
        event.preventDefault(); // Prevent form submission
    }
}

function forgotPassword() {
    let confirmReset = confirm("Do you want to reset your password?");
    if (confirmReset) {
        alert("Password reset instructions sent to your email!");
    }
}

// Wait for the DOM to fully load before adding event listeners
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".submit-btn").addEventListener("click", validateLoginForm);
    document.querySelectorAll("a").forEach(link => link.addEventListener("click", forgotPassword));
});
