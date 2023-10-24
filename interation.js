// Rolagem suave para âncoras de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                behavior: 'smooth',
                top: targetElement.offsetTop
            });
        }
    });
});

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const nameField = document.querySelector('input[name="Nome"]');
    const emailField = document.querySelector('input[name="Email"]');
    const messageField = document.querySelector('textarea[name="Mensagem"]');
    
    if (nameField.value.trim() === '' || emailField.value.trim() === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Adicione aqui a lógica de validação de e-mail, por exemplo, usando uma expressão regular.

    // Se tudo estiver válido, você pode enviar o formulário aqui.
});

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contact-form");
    form.addEventListener("submit", function(event) {
        var nome = form.elements["nome"].value;
        var email = form.elements["email"].value;
        var mensagem = form.elements["mensagem"].value;
        
        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos do formulário.");
            event.preventDefault();
        }
    });
});
