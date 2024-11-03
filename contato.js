document.addEventListener('DOMContentLoaded', function () {
    // Inicializa o EmailJS   
    emailjs.init("iHpCuEgPNkHxdw8Ud");

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        // Impede o envio do formulário para validação
        event.preventDefault();
        
        // Captura os valores dos campos
        const name = document.getElementsByName("name")[0].value.trim();
        const email = document.getElementsByName("email")[0].value.trim();
        const phone = document.getElementsByName("phone")[0].value.trim();
        const message = document.getElementsByName("message")[0].value.trim();
        
        // Regex para validação do e-mail
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Regex para validação do telefone no formato (99)999999999
        const phonePattern = /^\(\d{2}\)\s?\d{5}-?\d{4}$/;

        
        // Validação dos campos
        if (name === "") {
            alert("Por favor, preencha o campo de nome.");
            return;
        }
        if (!emailPattern.test(email)) {
            alert("Por favor, insira um endereço de email válido.");
            return;
        }
        
        if (!phonePattern.test(phone)) {
            alert("Por favor, insira um número de telefone válido no formato (99)999999999");
            return;
        }
        if (message === "") {
            alert("Por favor, insira uma mensagem.");
            return;
        }
        
        // Envio do e-mail com EmailJS
        emailjs.send('service_3qzn9sc', 'template_e1jx5wf', {
            name: name,
            email: email,
            phone: phone,
            message: message
        })
        .then(function() {
            alert('Mensagem enviada com sucesso!');
            // Opcionalmente, você pode limpar o formulário aqui
            document.getElementById("contact-form").reset();
        }, function(error) {
            alert('Erro ao enviar mensagem: ');
        });
    });
});
