Site simples em HTML e CSS com validação de formulário usando JavaScript:


### 1. `index.html` (HTML)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validation Example</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <h2>Sign Up</h2>
        <form id="signupForm" onsubmit="return validateForm()">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>

            <label for="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required>

            <button type="submit">Submit</button>
            <p id="error-message"></p>
        </form>
    </div>

    <script src="js/validation.js"></script>
</body>
</html>
```

### 2. `style.css` (CSS)
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
}

.container {
    max-width: 500px;
    margin: 50px auto;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
    text-align: center;
    margin-bottom: 20px;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 5px;
}

input {
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #218838;
}

#error-message {
    color: red;
    text-align: center;
    margin-top: 10px;
}
```

### 3. `validation.js` (JavaScript)
```javascript
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
```

### Funcionamento:
1. **HTML**: O formulário possui campos de nome, e-mail, senha e confirmação de senha.
2. **CSS**: Aplica um estilo simples para o layout e elementos.
3. **JavaScript**: A função `validateForm()` valida os campos antes de permitir o envio do formulário. Verifica se o nome está preenchido, se o e-mail é válido, se a senha tem pelo menos 6 caracteres, e se as senhas coincidem.