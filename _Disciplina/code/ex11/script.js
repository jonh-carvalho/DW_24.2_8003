document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitButton = form.querySelector('button[type="submit"]');
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    const imageInput = document.getElementById('image');
    const imagePreview = document.getElementById('imagePreview');

    // Function to check if all required inputs are filled
    function checkInputs() {
        let allFilled = true;
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                allFilled = false;
            }
        });
        submitButton.disabled = !allFilled;
    }

    // Add event listeners to each input field
    inputs.forEach(input => {
        input.addEventListener('input', checkInputs);
    });

    // Initial check to disable the button if inputs are empty
    checkInputs();

    // Event listener for image input to show preview
    imageInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imagePreview.innerHTML = `<img src="${e.target.result}" alt="Image Preview" style="max-width: 200px; max-height: 200px;">`;
            }
            reader.readAsDataURL(file);
        } else {
            imagePreview.innerHTML = '';
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the form from submitting

        // Show the spinner
        const spinner = document.getElementById('spinner');
        spinner.style.display = 'block';

        // Simulate form submission delay (e.g., AJAX request)
        setTimeout(function() {
            // Accessing the values of the form inputs
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Validation
            let isValid = true;
            let errorMessage = '';

            if (email === '') {
                isValid = false;
                errorMessage += 'O campo de email é obrigatório.\n';
            } else if (!validateEmail(email)) {
                isValid = false;
                errorMessage += 'Por favor, insira um email válido.\n';
            }

            if (message === '') {
                isValid = false;
                errorMessage += 'O campo de mensagem é obrigatório.\n';
            }

            // Displaying the result
            const resultDiv = document.getElementById('result');
            if (isValid) {
                resultDiv.innerHTML = 'Formulário enviado com sucesso!';
                resultDiv.style.color = 'green';
                document.getElementById('contactForm').reset(); // Reset the form inputs
                imagePreview.innerHTML = ''; // Clear the image preview

                // Hide the spinner
                spinner.style.display = 'none';

                // Redirect after 2 seconds
                setTimeout(function() {
                    window.location.href = 'success.html'; // Change to your desired URL
                }, 2000);
            } else {
                resultDiv.innerHTML = errorMessage.replace(/\n/g, '<br>');
                resultDiv.style.color = 'red';

                // Hide the spinner
                spinner.style.display = 'none';
            }
        }, 2000); // Simulate a 2-second delay for form submission
    });

    // Helper function to validate email format
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});