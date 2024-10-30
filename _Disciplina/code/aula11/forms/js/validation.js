function validateForm() {
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let errorMessage = document.getElementById("error-message");

    // Reset error message
    errorMessage.textContent = "";

    // Basic validation checks
    if (name === "") {
        errorMessage.textContent = "Name is required";
        return false;
    }

    if (!validateEmail(email)) {
        errorMessage.textContent = "Invalid email address";
        return false;
    }

    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters long";
        return false;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match";
        return false;
    }

    return true;
}

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}