document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obter valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validação simples
    if (name === '' || email === '' || message === '') {
        document.getElementById('result').innerText = 'Por favor, preencha todos os campos.';
        document.getElementById('result').style.color = 'red';
    } else {
        document.getElementById('result').innerText = 'Formulário enviado com sucesso!';
        document.getElementById('result').style.color = 'green';
    }
});